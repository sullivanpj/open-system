using System.Reflection;
using OpenSystem.Core.Application.Mediator.Attributes;

namespace OpenSystem.Core.Application.Utilities
{
    public static class RequestUtility
    {
        public static IEnumerable<RequestTypeAttribute> GetRequestTypes(MemberInfo type) =>
            type.GetCustomAttributes<RequestTypeAttribute>();
    }
}