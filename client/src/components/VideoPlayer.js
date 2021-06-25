import { Card, Row, Col } from "react-bootstrap";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="vh-100">
    <Row style={{backgroundColor:"black" , height:"650px"}}>
      {stream && (
        <Col xs={12} md={6}>
          <Card bg="danger" className="mx-3 mt-5 mb-3">
            <video playsInline muted ref={myVideo} autoPlay />
          </Card>
        </Col>
      )}
      {/* <Col xs={12} md={6}>
        <Card bg="danger" className="mx-3 mt-5" style={{height:"10rem"}}>
        <video playsInline muted ref={myVideo} autoPlay  />

        </Card>
      </Col> */}
      {callAccepted && !callAccepted && (
        <Col xs={12} md={6}>
          <Card bg="danger" style={{ height: "10rem" }}>
            <video playsInline ref={userVideo} autoPlay />
          </Card>
        </Col>
      )}
      {/* <Col xs={12} md={6}>
        <Card bg="danger" style={{height:"10rem"}}>
        <video playsInline ref={userVideo} autoPlay />
        </Card>
      </Col> */}
    </Row>
    </div>
  );
}
export default VideoPlayer;
