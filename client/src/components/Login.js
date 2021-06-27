import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Container className="mt-5" style={{ backgroundColor: "grey" }}>
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <h3>Welcome to Microsoft Teams!</h3>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <Form>
            <Button variant="primary btn-block" type="submit">
              Sign in with Google
            </Button>
            <Button variant="primary btn-block" type="submit">
              Sign in with Facebook
            </Button>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
