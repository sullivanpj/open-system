import { TemplateContext } from "@asyncapi/generator-react-sdk";
import { FileRenderer } from "../utils";

export default function ({ asyncapi, params }: TemplateContext) {
  if (!asyncapi.hasComponents()) {
    return null;
  }

  return (
    <FileRenderer name="Program.cs">
      {`using Masking.Serilog;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

namespace ${params.namespace}
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog((hostingContext, loggerConfiguration) =>
                    loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration)
                        .Destructure.ByMaskingProperties("Password", "Token"))
                .ConfigureServices((hostContext, services) =>
                {
                    services.AddHostedService<Worker>();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}`}
    </FileRenderer>
  );
}
