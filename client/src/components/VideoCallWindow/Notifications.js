import { useContext, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { SocketContext } from "../../SocketContext";
import Modal from "react-bootstrap/Modal";
import Teams from "../../media/teams.mp3";
import VideoIcon from "../../media/video-call-icon.jpg";

/** 
 * @returns {Modal} A pop-up modal opens up when a user receives permission request from the other user to join the meet.
 * Bootstrap modal pops up displaying the name of the person who is making the request with two options of either 
   accepting or rejecting the call.
 * A caller tune also plays notifying the user of the request.
 */

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const [rejected, setRejected] = useState(false);
  const Audio = useRef();
  const handleReject = () => {
    setRejected(true);
    window.location.reload();
    Audio?.current?.pause();
  };

  return (
    <>
      <Modal
        show={call.isReceivingCall && !callAccepted && !rejected}
        onHide={handleReject}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Permission Request</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Caller tune */}
          <audio src={Teams} loop ref={Audio} autoPlay />
          <h5>
            {call.name ? call.name : "Someone"} is requesting to join the call
          </h5>
          <img
            src={VideoIcon}
            style={{ height: "100px", width: "100px" }}
            alt="user requesting to join meeting"
          />
        </Modal.Body>

        <Modal.Footer>
          {/* button for accepting call */}
          <Button variant="success" onClick={answerCall}>
            Accept
          </Button>

          {/* button for rejecting call */}
          <Button variant="danger" onClick={handleReject}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notifications;
