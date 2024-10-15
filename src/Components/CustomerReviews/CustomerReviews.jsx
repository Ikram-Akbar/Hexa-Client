import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Customer Reviews</h2>
      <Row className="text-center mt-4">
        <Col md={4}>
          <div className="mx-2 border p-5">
            <FaStar color="gold" />
            <p>&quot;Excellent service! My car runs like new!&quot;</p>
            <footer>- Alice Johnson</footer>
          </div>
        </Col>
        <Col md={4}>
          <div className="mx-2 border p-5">
            <FaStar color="gold" />
            <p>&quot;Excellent service! My car runs like new!&quot;</p>
            <footer>- Alice Johnson</footer>
          </div>
        </Col>
        <Col md={4}>
          <div className="mx-2 border p-5">
            <FaStar color="gold" />
            <p>&quot;Excellent service! My car runs like new!&quot;</p>
            <footer>- Alice Johnson</footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerReviews;
