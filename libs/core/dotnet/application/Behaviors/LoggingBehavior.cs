using OpenSystem.Core.Application.Interfaces;
using MediatR.Pipeline;
using Serilog;

namespace OpenSystem.Core.Application.Behaviors
{
  public class LoggingBehavior<TRequest>
    : IRequestPreProcessor<TRequest>
    where TRequest : notnull
  {
    private readonly ILogger _logger;

    private readonly ICurrentUserService _currentUserService;

    //private readonly IIdentityService _identityService;

    public LoggingBehavior(ILogger logger,
      ICurrentUserService currentUserService)
    {
        _logger = logger;
        _currentUserService = currentUserService;
        //_identityService = identityService;
    }

    public async Task Process(TRequest request,
      CancellationToken cancellationToken)
    {
        var requestName = typeof(TRequest).Name;
        var userId = _currentUserService.UserId ?? string.Empty;
        string? userName = string.Empty;

        if (!string.IsNullOrEmpty(userId))
        {
            //userName = await _identityService.GetUserNameAsync(userId);
        }

        _logger.Information("OpenSystem Request: {Name} {@UserId} {@UserName} {@Request}",
            requestName,
            userId,
            userName,
            request);
    }
  }
}