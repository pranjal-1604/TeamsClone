import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";
import { SocketContext } from "../SocketContext";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";


function Options({children}) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Card>
      
        <Row className="p-4 justify-content-center">
          <Col xs={12} md={6} className="justify-content-center" >
            <h5>Account Info</h5>
            <Form inline>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <Button variant="primary">
                Copy Your ID
                <i className="material-icons content-copy" style={{verticalAlign:"middle" , marginLeft:"6px"}}>content_copy</i>
              </Button>
            </CopyToClipboard>
            </Form>
            <div>
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
              url={`https://video-chat-mihir.web.app/`}
              title={`Join this meeting with the given code  \n`}
            >
              <TwitterIcon size={28} round  />
            </TwitterShareButton>
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
              <Button
                variant="danger"
         
                onClick={leaveCall}
              >
               <i className="material-icons call-end" style={{verticalAlign:"middle" , marginRight:"6px"}}>call_end</i>
                Hang Up
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => callUser(idToCall)}
              >
               <i className="material-icons call" style={{verticalAlign:"middle" , marginRight:"6px"}}>call</i>
                Call
              </Button>
            )}
            </Form>
          </Col>
        </Row>
      
      {children}
    </Card>
  );
}
export default Options;
