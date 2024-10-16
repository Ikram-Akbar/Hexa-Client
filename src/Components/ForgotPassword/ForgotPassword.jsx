import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Forgot Your Password?</h2>
          <p className="text-center">
            Enter your registered email address below, and we&apos;ll send you
            instructions on how to reset your password.
          </p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>
                <FaEnvelope /> Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              <FaLock /> Send Reset Link
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/login">Back to Login</Link>
          </div>
          <div className="text-center mt-2">
            <Link to="/register">Create a New Account</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
