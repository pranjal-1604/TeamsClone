import { Row, Card } from "react-bootstrap";
import AccountInfo from "./OptionComponents/AccountInfo";
import JoinMeet from "./OptionComponents/JoinMeet";

function Options({ children }) {
  return (
    <div style={{ backgroundColor: "black", width: "100%", border: "0px" }}>
      <Card style={{ backgroundColor: "#ffccd4", margin: "0px 40px" }}>
        <Row className="p-1 justify-content-center ml-2">
          <AccountInfo />
          <JoinMeet />
        </Row>
        {children}
      </Card>
    </div>
  );
}
export default Options;
