// import "../styling/video.css";
import { ContextProvider } from "../SocketContext";
import { Card } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";

function Video() {
  return (
    <div>
      <ContextProvider>
        <Card style={{ backgroundColor: "black", margin: "0px" }}>
          {/* <div className="navigation-menu">
          <Navbar bg="dark" expand="lg">
            <span className="icons">
              <Button variant="secondary">
                <i className="material-icons chat video-icons">chat</i>
              </Button>
              <Button variant="secondary">
                <i className="material-icons more_horiz video-icons">
                  more_horiz
                </i>
              </Button>
              <Button variant="secondary">
                <i className="material-icons videocam video-icons">videocam</i>
              </Button>
              <Button variant="secondary">
                <i className="material-icons mic video-icons">mic</i>
              </Button>
              <Button variant="danger">Leave</Button>
            </span>
          </Navbar> */}

          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>

          {/* </div> */}
        </Card>
      </ContextProvider>
    </div>
  );
}
export default Video;
