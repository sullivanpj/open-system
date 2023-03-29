namespace OpenSystem.Core.Domain.ReadStores
{
    public interface IReadModelContext
    {
        IServiceProvider ServiceProvider { get; }

        void MarkForDeletion();

        bool IsMarkedForDeletion { get; }

        string ReadModelId { get; }

        bool IsNew { get; }
    }
}
