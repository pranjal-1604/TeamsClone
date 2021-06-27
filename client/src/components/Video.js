import "../styling/video.css";
import { Card, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";



function Video() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Card>
        <div className="navigation-menu">
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
          </Navbar>
          
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
         
        </div>
      </Card>
    </div>
  );
}
export default Video;
