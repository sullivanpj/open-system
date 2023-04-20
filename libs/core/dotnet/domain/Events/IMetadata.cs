using OpenSystem.Core.Domain.Common;
using OpenSystem.Core.Domain.ValueObjects;

namespace OpenSystem.Core.Domain.Events
{
    public interface IMetadata : IMetadataContainer
    {
        EventId EventId { get; }

        ISourceId SourceId { get; }

        string EventName { get; }

        ulong EventVersion { get; }

        DateTimeOffset Timestamp { get; }

        long TimestampEpoch { get; }

        ulong AggregateSequenceNumber { get; }

        string AggregateId { get; }

        string AggregateName { get; }

        IMetadata CloneWith(params KeyValuePair<string, string>[] keyValuePairs);

        IMetadata CloneWith(IEnumerable<KeyValuePair<string, string>> keyValuePairs);
    }
}