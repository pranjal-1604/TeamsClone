import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";
import { SocketContext } from "../SocketContext";


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
              </Button>
            </CopyToClipboard>
            </Form>
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
                Hang Up
              </Button>
            ) : (
              <Button
                variant="primary"
                
                
                onClick={() => callUser(idToCall)}
              >
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
