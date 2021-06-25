import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchContact() {
  return (
    <Form>
      <Row>
        <Col xs={10}>
          <Form.Control placeholder="Search here" />
        </Col>
        <Col xs={2}>
          <Button variant="secondary">
            <i className="material-icons search-icon">search</i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
export default SearchContact;
