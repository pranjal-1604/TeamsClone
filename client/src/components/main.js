import MainNav from "./MainNav";
import ContactCard from "./ContactCard";
import ContactMenu from "./ContactMenu";
import { Row, Col, Card } from "react-bootstrap";

import SearchContact from "./SearchContact";

function Main() {
  return (
    <>
      <MainNav />
      <Row>
        <Col md={4} xs={12}>
          <ContactMenu />
          <SearchContact />
          <ContactCard />
          <ContactCard />
        </Col>
        <Col md={8} xs={12}>
          <Card className="current-contact">
            <Row>
              <Col md={1}>
                <Card.Img
                  className="contact-image"
                  variant="top"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQG4s445YDfU1A/profile-displayphoto-shrink_800_800/0/1595707347023?e=1629331200&v=beta&t=BKZOwei92eFnFMigbIhM-YvFsZiQ3_8G26475vAnbnM"
                />
              </Col>
              <Col md={11}>
                <Card.Body>
                  <Card.Title>Pranjal Singh</Card.Title>
                  <Card.Text>Status</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Main;
