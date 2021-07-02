import  { useContext ,useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

import { SocketContext } from '../SocketContext';
const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    const [rejected,setRejected] = useState(false);
    const handleReject = () => {
      setRejected(true);
      window.location.reload();
    }
  
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
        {call.name ? call.name: "Someone"} is requesting to join the call
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={answerCall} >
            Accept
          </Button>
          <Button variant="danger" onClick={handleReject}>Reject</Button>
        </Modal.Footer>
        </Modal>
        {/* {
          call.isReceivingCall && !callAccepted && (
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} is calling:</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        )} */}
      </>
    );
    
  };
  
  export default Notifications;