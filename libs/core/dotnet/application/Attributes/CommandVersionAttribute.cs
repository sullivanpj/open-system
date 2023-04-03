using OpenSystem.Core.Domain.Attributes;

namespace OpenSystem.Core.Application.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class CommandVersionAttribute : VersionAttribute
    {
        public CommandVersionAttribute(string name, ulong version)
            : base(name, version) { }
    }
}