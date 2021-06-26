import { Card, Row, Col } from "react-bootstrap";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="vh-100">
    <Row style={{backgroundColor:"black"}}>
      {stream && (
        <Col xs={12} md={6}>
          <Card bg="danger" className="mx-3 mt-5 mb-3">
            <h5>{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} autoPlay />
          </Card>
        </Col>
      )}
      
      {callAccepted && !callEnded && (
        <Col xs={12} md={6}>
          <Card bg="danger" style={{ height: "10rem" }}>
            <h5>{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} autoPlay />
          </Card>
        </Col>
      )}
      
    </Row>
    </div>
  );
}
export default VideoPlayer;