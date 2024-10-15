import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div
      style={{
        padding: "50px 0",
        textAlign: "center",
        background: "#007bff",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1>Your Trusted Car Servicing Partner</h1>
            <p>Experience top-notch car care with our expert services.</p>
            <Button variant="light" size="lg" href="/book-service">
              Book a Service
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
