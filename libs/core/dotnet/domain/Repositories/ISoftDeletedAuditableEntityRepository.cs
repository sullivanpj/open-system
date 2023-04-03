using OpenSystem.Core.Domain.Entities;
using OpenSystem.Core.Domain.ResultCodes;
using OpenSystem.Core.Domain.ValueObjects;

namespace OpenSystem.Core.Domain.Repositories
{
    public interface ISoftDeletedAuditableEntityRepository<TEntity, TEntityId>
        : IAuditableEntityRepository<TEntity, TEntityId>
        where TEntity : SoftDeletedAuditableEntity<TEntityId>
        where TEntityId : EntityId
    {
        Task<TEntity> RestoreAsync<TDto>(TDto dto, CancellationToken cancellationToken = default)
            where TDto : class;
    }
}