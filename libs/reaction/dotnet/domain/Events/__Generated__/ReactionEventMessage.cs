// ------------------------------------------------------------------------------
// <auto-generated>
//    Generated by avrogen, version 1.11.1
//    Changes to this file may cause incorrect behavior and will be lost if code
//    is regenerated
// </auto-generated>
// ------------------------------------------------------------------------------
namespace OpenSystem.Reaction.Domain.Events.Models
{
	using System;
	using System.Collections.Generic;
	using System.Text;
	using global::Avro;
	using global::Avro.Specific;

	/// <summary>
	/// The message details of a user's reaction to content in the OpenSystem application.
	/// </summary>
	[global::System.CodeDom.Compiler.GeneratedCodeAttribute("avrogen", "1.11.1")]
	public partial class ReactionEventMessage : global::Avro.Specific.ISpecificRecord
	{
		public static global::Avro.Schema _SCHEMA = global::Avro.Schema.Parse(@"{""type"":""record"",""name"":""ReactionEventMessage"",""doc"":""The message details of a user's reaction to content in the OpenSystem application."",""namespace"":""OpenSystem.Reaction.Domain.Events.Models"",""fields"":[{""name"":""ContentId"",""type"":""string""},{""name"":""UserId"",""type"":""string""},{""name"":""Type"",""type"":{""type"":""enum"",""name"":""ReactionTypes"",""doc"":""The types of possible reactions a user could have to content."",""namespace"":""OpenSystem.Reaction.Domain.Events.Models"",""symbols"":[""Like"",""Dislike"",""Love"",""Happy"",""Sad"",""Laugh"",""Cry""]}},{""name"":""Count"",""default"":1,""type"":""int""}]}");
		private string _ContentId;
		private string _UserId;
		private OpenSystem.Blog.Reaction.Application.Models.ReactionTypes _Type;
		private int _Count;
		public virtual global::Avro.Schema Schema
		{
			get
			{
				return ReactionEventMessage._SCHEMA;
			}
		}
		public string ContentId
		{
			get
			{
				return this._ContentId;
			}
			set
			{
				this._ContentId = value;
			}
		}
		public string UserId
		{
			get
			{
				return this._UserId;
			}
			set
			{
				this._UserId = value;
			}
		}
		public OpenSystem.Blog.Reaction.Application.Models.ReactionTypes Type
		{
			get
			{
				return this._Type;
			}
			set
			{
				this._Type = value;
			}
		}
		public int Count
		{
			get
			{
				return this._Count;
			}
			set
			{
				this._Count = value;
			}
		}
		public virtual object Get(int fieldPos)
		{
			switch (fieldPos)
			{
			case 0: return this.ContentId;
			case 1: return this.UserId;
			case 2: return this.Type;
			case 3: return this.Count;
			default: throw new global::Avro.AvroRuntimeException("Bad index " + fieldPos + " in Get()");
			};
		}
		public virtual void Put(int fieldPos, object fieldValue)
		{
			switch (fieldPos)
			{
			case 0: this.ContentId = (System.String)fieldValue; break;
			case 1: this.UserId = (System.String)fieldValue; break;
			case 2: this.Type = (OpenSystem.Blog.Reaction.Application.Models.ReactionTypes)fieldValue; break;
			case 3: this.Count = (System.Int32)fieldValue; break;
			default: throw new global::Avro.AvroRuntimeException("Bad index " + fieldPos + " in Put()");
			};
		}
	}
}
