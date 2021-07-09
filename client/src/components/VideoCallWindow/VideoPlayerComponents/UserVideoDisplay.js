import { Card,Col } from "react-bootstrap";
import { SocketContext } from "../../../SocketContext";
import { useContext } from "react";

function UserVideoDisplay() {

  const { callAccepted, userVideo, callEnded, call } = useContext(SocketContext);

  return (
    <>
      {callAccepted && !callEnded && (
        <Col xs={12} md={6}>
          <Card
            style={{
              backgroundColor: "rgba(70,71,117,0.4)",
              borderRadius: "7px",
            }}
            className="mx-3 mt-2 mb-1"
          >
            <h5 style={{ color: "grey" }}>{call.name || "Name"}</h5>
            <video
              playsInline
              ref={userVideo}
              style={{ width: "100%", paddingBottom: "20px" }}
              autoPlay
            />
          </Card>
        </Col>
      )}
    </>
  );
}
export default UserVideoDisplay;
