import {useContext} from 'react';
import { SocketContext } from "../SocketContext";

function Options(){
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
}