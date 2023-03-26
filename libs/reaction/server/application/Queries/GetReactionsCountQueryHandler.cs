using AutoMapper;
using OpenSystem.Reaction.Domain.Repositories;
using OpenSystem.Core.Domain.Entities;
using OpenSystem.Reaction.Application.Models;
using OpenSystem.Reaction.Application.Models.DTOs;
using OpenSystem.Core.Domain.Exceptions;
using OpenSystem.Core.Domain.ResultCodes;
using Microsoft.Extensions.Logging;

namespace OpenSystem.Reaction.Application.Queries
{
    public class GetReactionsCountQueryHandler
        : BaseQueryHandler<GetReactionsCountQuery, GetReactionsCount200Response>
    {
        private readonly IReactionReadOnlyRepository _repository;

        public GetReactionsCountQueryHandler(
            IReactionReadOnlyRepository repository,
            IMapper mapper,
            ILogger<GetReactionsCountQueryHandler> logger
        )
            : base(mapper, logger)
        {
            _repository = repository;
        }

        protected override async ValueTask<object> InnerHandleAsync(
            GetReactionsCountQuery request,
            CancellationToken cancellationToken
        )
        {
            var queryResult = await _repository.GetReactionsCountAsync(
                request.ContentId,
                request.Type
            );
            if (queryResult == null || queryResult.Count == 0)
                throw new NotFoundException();

            return queryResult;
        }
    }
}
