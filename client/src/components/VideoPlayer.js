import { Card, Row, Col } from "react-bootstrap";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call , myVdoStatus,
    userVdoStatus,
    updateVideo,
    myMicStatus,
    userMicStatus,
    updateMic,} =
    useContext(SocketContext);
  return (
    <div className="vh-100">
    <Row style={{backgroundColor:"black"}}>
      {stream && (
        <Col xs={12} md={6}>
          <Card bg="danger" className="mx-3 mt-2 mb-3">
            <h5>{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} style={{padding:"10px"}} autoPlay />
            <div>
            <div
              onClick={() => {
                updateMic();
              }}
              tabIndex="0"
            >
              <i
                className={`fa fa-microphone${myMicStatus ? "" : "-slash"}`}
                style={{ transform: "scaleX(-1)" }}
                aria-label={`${myMicStatus ? "mic on" : "mic off"}`}
                aria-hidden="true"
              ></i>
            </div>
            <div
              onClick={() => {
                updateVideo();
              }}
              tabIndex="0"
            >
              <i
                className={`fas fa-video${myVdoStatus ? "" : "-slash"}`}
                style={{ transform: "scaleX(-1)" }}
                aria-label={`${myVdoStatus ? "video on" : "video off"}`}
                aria-hidden="true"
              ></i>

            </div>
            </div>
          </Card>
        </Col>
      )}
      
      {callAccepted && !callEnded && (
        <Col xs={12} md={6}>
          <Card bg="danger" className="mx-3 mt-2 mb-3">
            <h5>{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} style={{padding:"10px"}}autoPlay />
          </Card>
        </Col>
      )}
      
    </Row>
    </div>
  );
}
export default VideoPlayer;
