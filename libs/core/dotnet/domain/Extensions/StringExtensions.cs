using System.Linq;

namespace OpenSystem.Core.DotNet.Domain.Extensions
{
    public static class StringExtensions
    {
        public static bool IsSet(this string value)
        {
            return !string.IsNullOrEmpty(value);
        }

        public static bool IsTrue(this string value,
          bool default_ = false)
        {
            if (value == null)
              return default_;

            return (new object[] { "1", "true" }).Contains(value.ToLower());
        }

        public static int IntValue(this string value,
          int default_ = 0)
        {
            if (value == null)
              return default_;

            if (!int.TryParse(value, out var intValue))
              return default_;

            return intValue;
        }
    }
}
