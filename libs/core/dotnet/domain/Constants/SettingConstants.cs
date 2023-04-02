namespace OpenSystem.Core.Domain.Constants
{
    /// <summary>
    /// A set of constants related to App settings
    /// </summary>
    public sealed class SettingConstants
    {
        public const string CacheInstanceName = "OpenSystem";

        public class ConnectionStrings
        {
            public const string DefaultConnection = "DefaultConnection";

            public const string CacheConnection = "CacheConnection";

            public const string EventStoreConnection = "EventStoreConnection";

            public const string DefaultInMemoryDatabase = "OpenSystemDatabase";
        }
    }
}
