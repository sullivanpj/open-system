using System;
using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;
using OpenSystem.Core.DotNet.Domain.Extensions;
using OpenSystem.Core.DotNet.Domain.Common;
using System.Linq;

namespace OpenSystem.Shared.Domain.ValueObjects
{
	public class EmailAddress
    : ValueObject
	{
		public readonly string Value;

    private EmailAddress(string value)
		{
			Value = value;
		}

    protected override IEnumerable<object> GetEqualityComponents()
    {
        yield return Value;
    }

		public static EmailAddress Create(string value)
		{
      return new EmailAddress(value);
		}

    public override IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
      if (StringExtensions.IsSet(Value) &&
        !new Regex(@"^(([^<>()[\]\\.,;:\s@\""]+"
           + @"(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@"
           + @"((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"
           + @"\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+"
           + @"[a-zA-Z]{2,}))$").IsMatch(Value))
      {
          yield return new ValidationResult("Email address is not formatted correctly.");
      }
    }
	}
}
