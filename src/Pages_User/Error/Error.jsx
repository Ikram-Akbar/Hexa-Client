import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";


const Error = () => {
    const notFound = "https://i.ibb.co.com/L51tscT/6373669.jpg";
  return (
    <Container className="text-center m-5">
      <Row>
        <Col>
          <img
            src={notFound}
            alt="Not Found"
            style={{ width: "300px", marginBottom: "20px" }}
          />
          <h1>404 - Page Not Found</h1>
          <FaRegSadCry size={50} color="#FF6347" />
          <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/">
            <Button variant="primary">Go back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
