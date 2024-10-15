import { Container, Row, Col } from "react-bootstrap";
import { FaWrench, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Why Choose Us?</h2>
      <Row className="text-center">
        <Col md={4}>
          <FaWrench className="m-4" size={30} />
          <h4>Expert Technicians</h4>
          <p>
            Our team of experienced mechanics is dedicated to providing
            top-quality service.
          </p>
        </Col>
        <Col md={4} >
          <FaDollarSign className="m-4" size={30} />
          <h4>Transparent Pricing</h4>
          <p>No hidden fees, just honest pricing for all our services.</p>
        </Col>
        <Col md={4} >
          <FaMapMarkerAlt className="m-4" size={30} />
          <h4>Convenient Location</h4>
          <p>
            Easy access to our shop ensures you can get service when you need
            it.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;