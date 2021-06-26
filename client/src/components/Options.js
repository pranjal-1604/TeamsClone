import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Card } from "react-bootstrap";
import { SocketContext } from "../SocketContext";

function Options() {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Card>
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <h5>Account Info</h5>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6}>
            <h5>Make a call</h5>
            <Form.Control
              placeholder="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <CopyToClipboard text={me}>
              <Button variant="contained" color="primary">
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </Col>
          <Col xs={12} md={6}>
            {callAccepted && !callEnded ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={leaveCall}
              >
                Hang Up
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => callUser(idToCall)}
              >
                Call
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
export default Options;
