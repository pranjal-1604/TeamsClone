import {Row} from 'react-bootstrap';
import MyVideoDisplay from "./VideoPlayerComponents/MyVideoDisplay";
import UserVideoDisplay from "./VideoPlayerComponents/UserVideoDisplay";

function VideoPlayer() {
  
  return (
    <div className="vh-100">
      <Row style={{ backgroundColor: "black" }}>
        <MyVideoDisplay />
        <UserVideoDisplay />
      </Row>
    </div>
  );
}
export default VideoPlayer;
