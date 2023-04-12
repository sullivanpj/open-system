using Microsoft.AspNetCore.Http;

namespace OpenSystem.Core.Api
{
    public abstract class RouteHandlerInvocationContext
    {
        public abstract IList<object?> Arguments { get; }

        public abstract HttpContext HttpContext { get; }
    }
}