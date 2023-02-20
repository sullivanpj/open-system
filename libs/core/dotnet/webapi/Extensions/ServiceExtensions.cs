using IdentityModel;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Security.Claims;
using System.Text.Json;
using OpenSystem.Core.WebApi.Constants;

namespace OpenSystem.Core.WebApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddControllersExtension(this IServiceCollection services)
        {
            services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                });
        }

        //Configure CORS to allow any origin, header and method.
        //Change the CORS policy based on your requirements.
        //More info see: https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-3.0
        public static void AddCorsExtension(this IServiceCollection services)
        {
            services.AddCors();
        }

        public static void AddVersionedApiExplorerExtension(this IServiceCollection services)
        {
            services.AddVersionedApiExplorer(o =>
            {
                o.GroupNameFormat = "'v'VVV";
                o.SubstituteApiVersionInUrl = true;
            });
        }

        public static void AddApiVersioningExtension(this IServiceCollection services)
        {
            services.AddApiVersioning(config =>
            {
                // Specify the default API Version as 1.0
                config.DefaultApiVersion = new ApiVersion(1, 0);
                // If the client hasn't specified the API version in the request, use the default API version number
                config.AssumeDefaultVersionWhenUnspecified = true;
                // Advertise the API versions supported for the particular endpoint
                config.ReportApiVersions = true;
            });
        }

        public static void AddJWTAuthentication(this IServiceCollection services,
          IConfiguration configuration)
        {

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
            .AddIdentityServerAuthentication(options =>
            {
                options.Authority = configuration["Sts:ServerUrl"];
                options.RequireHttpsMetadata = false;
            });
        }

        public static void AddAuthorizationPolicies(this IServiceCollection services,
          IConfiguration configuration)
        {
            string admin = configuration["ApiRoles:AdminRole"],
              manager = configuration["ApiRoles:ManagerRole"],
              employee = configuration["ApiRoles:EmployeeRole"];

            services.AddAuthorization(options =>
            {
                options.AddPolicy(AuthorizationConstants.AdminPolicy, policy =>
                  policy.RequireAssertion(context => HasRole(context.User, admin)));
                options.AddPolicy(AuthorizationConstants.ManagerPolicy, policy =>
                  policy.RequireAssertion(context => HasRole(context.User, manager) ||
                  HasRole(context.User, admin)));
                options.AddPolicy(AuthorizationConstants.EmployeePolicy, policy =>
                  policy.RequireAssertion(context => HasRole(context.User, employee) ||
                  HasRole(context.User, manager) ||
                  HasRole(context.User, admin)));
            });
        }

        public static bool HasRole(ClaimsPrincipal user,
          string role)
        {
            if (string.IsNullOrEmpty(role))
                return false;

            return user.HasClaim(c => (c.Type == JwtClaimTypes.Role ||
              c.Type == $"client_{JwtClaimTypes.Role}") &&
              System.Array.Exists(c.Value.Split(','), e => e == role));
        }
    }
}
