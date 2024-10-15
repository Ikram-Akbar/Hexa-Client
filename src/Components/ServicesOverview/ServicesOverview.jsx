import { Container, Row, Col } from "react-bootstrap";

const ServicesOverviewSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Our Services</h2>
      <Row className="text-center mt-4">
        <Col md={4}>
          <img
            src="https://placehold.co/300x300/png"
            alt="Full Car Maintenance"
          />
          <div className="mt-3">
            <h4>Full Car Maintenance</h4>
            <p>Comprehensive services to keep your car in top shape.</p>
          </div>
        </Col>
        <Col md={4}>
          <img
            src="https://placehold.co/300x300/png"
            alt="Engine Diagnostics"
          />
          <div className="mt-3">
            <h4>Engine Diagnostics</h4>
            <p>
              Advanced diagnostics to ensure your engine is running smoothly.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <img src="https://placehold.co/300x300/png" alt="Bodywork Repairs" />
          <div className="mt-3">
            <h4>Bodywork Repairs</h4>
            <p>Quality repairs to keep your car looking great.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesOverviewSection;
