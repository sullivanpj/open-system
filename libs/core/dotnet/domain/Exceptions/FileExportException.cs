using OpenSystem.Core.Domain.Extensions;
using OpenSystem.Core.Domain.ResultCodes;

namespace OpenSystem.Core.Domain.Exceptions
{
    public class FileExportException : BaseException
    {
        public FileExportException()
          : base(typeof(ResultCodeApplication),
            ResultCodeApplication.FileExportFailure)
        {
        }

        public FileExportException(Type? resultCodeType,
          int code)
          : base((resultCodeType == null
            ? typeof(ResultCodeApplication)
            : resultCodeType),
              (!code.IsSet()
            ? ResultCodeApplication.FileExportFailure
            : code))
        {
        }

        public FileExportException(Type? resultCodeType,
          int code,
          Exception exception)
            : base(resultCodeType,
                code,
                exception)
        {
        }

        public FileExportException(Exception exception)
            : base(typeof(ResultCodeApplication),
                ResultCodeApplication.FileExportFailure,
                exception)
        {
        }
    }
}