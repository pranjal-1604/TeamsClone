import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { SocketContext } from "../../../SocketContext";

/**
 *
 * @returns {Form, Button} A form to paste in the ID of the meeting to be joined and a button to initate permission request to join the meeting.
 */

function JoinMeet() {
  const { callAccepted, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Col xs={12} md={6}>
      <h5>Make a call</h5>
      <Form inline>
        {/* Form to paste in the ID of the meeting to be joined */}
        <Form.Control
          placeholder="Paste ID to call"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />

        {/* Change button display before and during a call */}

        {callAccepted && !callEnded ? (
          //Hang up button to be displayed during call.
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
          //Call button to be displayed in order to make a call
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
