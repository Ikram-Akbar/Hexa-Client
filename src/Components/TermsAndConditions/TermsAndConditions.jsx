import { Container, Row, Col } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Terms and Conditions</h2>
          <p className="text-center">
            Please read these terms and conditions carefully before using our
            service.
          </p>

          <h4>1. Introduction</h4>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of our website and services.
          </p>

          <h4>2. Acceptance of Terms</h4>
          <p>
            By accessing or using our service, you agree to be bound by these
            terms. If you do not agree with any part of the terms, you must not
            use our service.
          </p>

          <h4>3. User Responsibilities</h4>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account and password, and for restricting access to their computer.
          </p>

          <h4>4. Modifications to Terms</h4>
          <p>
            We reserve the right to change these terms at any time. Your
            continued use of the service following any changes signifies your
            acceptance of the new terms.
          </p>

          <h4>5. Governing Law</h4>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which we operate.
          </p>

          <h4>6. Contact Us</h4>
          <p>
            If you have any questions about these terms, please contact us at
            support@example.com.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
