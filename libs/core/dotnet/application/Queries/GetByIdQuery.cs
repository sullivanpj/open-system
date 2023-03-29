using OpenSystem.Core.Application.Interfaces;
using OpenSystem.Core.Domain.ReadStores;
using OpenSystem.Core.Domain.Common;

namespace OpenSystem.Core.Application.Queries
{
    public class GetByIdQuery<TReadModel> : IQuery<TReadModel>
        where TReadModel : class, IReadModel
    {
        public string Id { get; }

        public GetByIdQuery(IIdentity identity)
            : this(identity.Value) { }

        public GetByIdQuery(string id)
        {
            if (string.IsNullOrEmpty(id))
                throw new ArgumentNullException(nameof(id));

            Id = id;
        }
    }
}
