import { Card, Row, Col } from "react-bootstrap";

function ContactCard() {
  return (
    <Card>
      <Row>
        <Col md={3}>
          <Card.Img
            className="contact-image"
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQG4s445YDfU1A/profile-displayphoto-shrink_800_800/0/1595707347023?e=1629331200&v=beta&t=BKZOwei92eFnFMigbIhM-YvFsZiQ3_8G26475vAnbnM"
          />
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>Pranjal Singh</Card.Title>
            <Card.Text>
              Hey!!
              <span className="timestamp">13:21</span>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ContactCard;
