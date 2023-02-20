namespace OpenSystem.Core.Domain.ResultCodes
{
	/// <summary>
	/// Summary description for ResultCodeApplication.
	/// </summary>
	[Serializable]
	public class ResultCodeApplication : ResultCode
	{
		#region Public

		#region Constants

		public const int FieldNotSet = 1;

    public const int FileExportFailure = 2;

    public const int NoResultsFound = 3;

    public const int MissingSetting = 4;

    public const int StartupFailure = 5;

    public const int MissingMediator = 6;

		#endregion Constants

		#endregion Public

		#region Protected

		#region Properties

		protected override string MessageType
		{
			get { return "Application"; }
		}

		#endregion Properties

		#endregion Protected
	}
}


