import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { SocketContext } from "../../../SocketContext";

function JoinMeet() {
  const { callAccepted, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
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
  );
}
export default JoinMeet;
