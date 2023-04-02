using OpenSystem.Core.Application.Queries;
using OpenSystem.Core.Domain.ReadStores;

namespace OpenSystem.Core.Infrastructure.ReadStores.InMemory
{
    public class InMemoryQueryHandler<TReadModel>
        : IQueryHandler<InMemoryQuery<TReadModel>, IReadOnlyCollection<TReadModel>>
        where TReadModel : class, IReadModel
    {
        private readonly IInMemoryReadStore<TReadModel> _readModelStore;

        public InMemoryQueryHandler(IInMemoryReadStore<TReadModel> readModelStore)
        {
            _readModelStore = readModelStore;
        }

        public Task<IReadOnlyCollection<TReadModel>> Handle(
            InMemoryQuery<TReadModel> query,
            CancellationToken cancellationToken
        )
        {
            return _readModelStore.FindAsync(query.Query, cancellationToken);
        }
    }
}