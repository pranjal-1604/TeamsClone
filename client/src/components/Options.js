import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";
import { SocketContext } from "../SocketContext";
import Alert from "react-bootstrap/Alert";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

function Options({ children }) {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    show,
    setShow,
    handleVisible,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div style={{ backgroundColor: "black", width: "100%", border: "0px" }}>
      <Card style={{ backgroundColor: "#ffccd4", margin: "0px 40px" }}>
        <Row className="p-1 justify-content-center ml-2">
          <Col xs={12} md={6} className="justify-content-center">
            <div className="mx-auto">
              <h5>Account Info</h5>
              <Form inline>
                <Form.Control
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CopyToClipboard text={me}>
                  <Button variant="primary" onClick={handleVisible}>
                    Copy Your ID
                    <i
                      className="material-icons content-copy"
                      style={{ verticalAlign: "middle", marginLeft: "6px" }}
                    >
                      content_copy
                    </i>
                  </Button>
                </CopyToClipboard>
                {show && (
                  <Alert
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      borderColor: "green",
                    }}
                    variant="success"
                  >
                    <p style={{ margin: "0px" }}>
                      <i
                        className="material-icons check_circle"
                        style={{ verticalAlign: "middle", margin: "2px" }}
                      >
                        check_circle
                      </i>
                      Code Copied successfully
                    </p>
                  </Alert>
                )}
              </Form>
              {/* <div> */}

              <WhatsappShareButton
                url={`https://ms-teams-video-chat.netlify.app/`}
                title={`Join this meeting with the given code ""\n`}
                separator="Link: "
              >
                <WhatsappIcon size={28} round />
              </WhatsappShareButton>
              <FacebookShareButton
                url={`https://ms-teams-video-chat.netlify.app/`}
                title={`Join this meeting with the given code ""\n`}
              >
                <FacebookIcon size={28} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`https://ms-teams-video-chat.netlify.app/`}
                title={`Join this meeting with the given code  \n`}
              >
                <TwitterIcon size={28} round />
              </TwitterShareButton>
              {/* </div> */}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h5>Make a call</h5>
            <Form inline>
              <Form.Control
                placeholder="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button variant="danger" onClick={leaveCall}>
                  <i
                    className="material-icons call-end"
                    style={{ verticalAlign: "middle", marginRight: "6px" }}
                  >
                    call_end
                  </i>
                  Hang Up
                </Button>
              ) : (
                <Button variant="primary" onClick={() => callUser(idToCall)}>
                  <i
                    className="material-icons call"
                    style={{ verticalAlign: "middle", marginRight: "6px" }}
                  >
                    call
                  </i>
                  Call
                </Button>
              )}
            </Form>
          </Col>
        </Row>
        {children}
      </Card>
    </div>
  );
}
export default Options;
