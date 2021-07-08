import { ContextProvider } from "../SocketContext";
import { Card } from "react-bootstrap";
import VideoPlayer from "./VideoCallWindow/VideoPlayer";
import Options from "./VideoCallWindow/Options";
import Notifications from "./VideoCallWindow/Notifications";

function Video() {
  return (
    <div>
      <ContextProvider>
        <Card style={{ backgroundColor: "black", margin: "0px" }}>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </Card>
      </ContextProvider>
    </div>
  );
}
export default Video;
