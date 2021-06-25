import { Card, Row, Col } from "react-bootstrap";

function ContactMenu() {
  return (
    <Card className="text-center">
      <Row className="contacts">
        <Col md={9}>Contacts</Col>
        <Col md={2}>
          <i className="material-icons message icons">contacts</i>
        </Col>
      </Row>
    </Card>
  );
}
export default ContactMenu;
