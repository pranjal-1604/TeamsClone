import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";
import Alert from "react-bootstrap/Alert";

function VideoPlayer() {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    show,
    setShow,
    myVdoStatus,
    userVdoStatus,
    updateVideo,
    myMicStatus,
    userMicStatus,
    updateMic,
  } = useContext(SocketContext);
  return (
    <div className="vh-100">
      <Row style={{ backgroundColor: "black" }}>
        {stream && (
          <Col xs={12} md={6}>
            <Container height="200px">
              <Card
                style={{
                  backgroundColor: "rgba(70,71,117,0.4)",
                  borderRadius: "7px",
                }}
                className="mx-3 mt-2 mb-1"
              >
                <h5 style={{ color: "grey" }}>
                  {show ? (
                    <Alert
                      style={{
                        display: "inline-block",
                        height: "10%",
                        align: "center",
                      }}
                      variant="success"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      <p style={{ paddingLeft: "6px" }}>
                        <i
                          className="material-icons check_circle"
                          style={{ verticalAlign: "middle", margin: "2px" }}
                        >
                          check_circle
                        </i>
                        Code Copied successfully
                      </p>
                    </Alert>
                  ) : (
                    name || "Name"
                  )}
                </h5>
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  style={{ width: "100%" }}
                  autoPlay
                />
                <div className="mx-auto" style={{ marginTop: "4px" }}>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      updateMic();
                    }}
                    tabIndex="0"
                    style={{ borderRadius: "20px", marginRight: "8px" }}
                  >
                    <i
                      className={`fa fa-microphone${
                        myMicStatus ? "" : "-slash"
                      }`}
                      style={{ transform: "scaleX(-1)", color: "black" }}
                      aria-label={`${myMicStatus ? "mic on" : "mic off"}`}
                      aria-hidden="true"
                    ></i>
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      updateVideo();
                    }}
                    tabIndex="0"
                    style={{ borderRadius: "30px" }}
                  >
                    <i
                      className={`fas fa-video${myVdoStatus ? "" : "-slash"}`}
                      style={{ transform: "scaleX(-1)", color: "black" }}
                      aria-label={`${myVdoStatus ? "video on" : "video off"}`}
                      aria-hidden="true"
                    ></i>
                  </Button>
                </div>
              </Card>
            </Container>
          </Col>
        )}

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
      </Row>
    </div>
  );
}
export default VideoPlayer;
