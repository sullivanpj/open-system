import { File, render } from "@asyncapi/generator-react-sdk";
import { ChannelPool } from "../../../components/templates/channelpool";

export default function ({ asyncapi, params }) {
  console.log("****** Generating ChannelPool");

  return (
    <File name="ChannelPool.cs">
      {render(<ChannelPool asyncapi={asyncapi} params={params} />)}
    </File>
  );
}
