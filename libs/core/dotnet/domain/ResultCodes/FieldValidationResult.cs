using System.Diagnostics;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;
using MediatR;
using OpenSystem.Core.Domain.Common;
using OpenSystem.Core.Domain.Enums;

namespace OpenSystem.Core.Domain.ResultCodes
{
  [Serializable]
  public class FieldValidationResult
    : BaseResult
  {
    public string FieldName { get; set; }

    public object? AttemptedValue { get; set; }

    public static FieldValidationResult Failure(string fieldName,
      Type type,
      int code,
      object? attemptedValue,
      ResultSeverityTypes severity = ResultSeverityTypes.Error,
      string? detail = null,
      string? extendedDetail = null,
      Dictionary<string, object>? formattedMessagePlaceholderValues = null)
    
    {
      return new FieldValidationResult(fieldName,
        type, 
        code, 
        attemptedValue,
        severity,
        detail, 
        extendedDetail,
        formattedMessagePlaceholderValues);
    }

    public static FieldValidationResult Failure(string fieldName,
      string type,
      int code,
      object? attemptedValue,
      ResultSeverityTypes severity = ResultSeverityTypes.Error,
      string? detail = null,
      string? extendedDetail = null,
      Dictionary<string, object>? formattedMessagePlaceholderValues = null)
    
    {
      return new FieldValidationResult(fieldName,
        type, 
        code, 
        attemptedValue,
        severity,
        detail, 
        extendedDetail,
        formattedMessagePlaceholderValues);
    }

    protected FieldValidationResult(string fieldName,
      Type type,
      int code,
      object? attemptedValue,
      ResultSeverityTypes severity = ResultSeverityTypes.Error,
      string? detail = null,
      string? extendedDetail = null,
      Dictionary<string, object>? formattedMessagePlaceholderValues = null)
      : base(type?.FullName, 
        code, 
        detail, 
        extendedDetail, 
        severity,
        formattedMessagePlaceholderValues)
    {
        FieldName = fieldName;
        AttemptedValue = attemptedValue;
    }

    protected FieldValidationResult(string fieldName,
      string type,
      int code,
      object? attemptedValue,
      ResultSeverityTypes severity = ResultSeverityTypes.Error,
      string? detail = null,
      string? extendedDetail = null,
      Dictionary<string, object>? formattedMessagePlaceholderValues = null)
      : base(type, 
        code, 
        detail, 
        extendedDetail, 
        severity,
        formattedMessagePlaceholderValues)
    {
        FieldName = fieldName;
        AttemptedValue = attemptedValue;
    }

    protected FieldValidationResult(string fieldName,
      object? attemptedValue,
      Exception exception,
      ResultSeverityTypes severity = ResultSeverityTypes.Error)
      : base(exception,
        severity)
    {
       FieldName = fieldName;
       AttemptedValue = attemptedValue;
    }

    protected override void InnerGetObjectData(ref SerializationInfo info,
      StreamingContext context)
    {
      base.InnerGetObjectData(ref info,
        context);

      info.AddValue("FieldName",
        FieldName);
      info.AddValue("AttemptedValue",
        AttemptedValue);
    }

    public override bool Equals(object? obj)
    {
      if (ReferenceEquals(obj,
        null) ||
        !(obj is BaseResult baseResult))
        return false;

      return base.Equals(baseResult);
    }

    public override int GetHashCode()
    {
      return base.GetHashCode() + FieldName.GetHashCode();
    }
  }
}
