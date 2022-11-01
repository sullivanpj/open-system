import { File, render } from "@asyncapi/generator-react-sdk";
import { IChannelPool } from "../../../../components/templates/channelpool.interface";

export default function ({ asyncapi, params }) {
  console.log("****** Generating IChannelPool");

  return (
    <File name="IChannelPool.cs">
      {render(<IChannelPool asyncapi={asyncapi} params={params} />)}
    </File>
  );
}
