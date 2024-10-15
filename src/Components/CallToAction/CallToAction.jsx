import { Container, Button } from "react-bootstrap";

const CallToActionSection = () => {
  return (
    <Container fluid  className="my-5 text-center bg-secondary p-5  fw-bold">
      <h2>Ready to Get Started?</h2>
      <p>Contact us today to book your service!</p>
      <Button className="text-dark fw-semibold" variant="outline-primary" href="/contact">
        Contact Us
      </Button>
    </Container>
  );
};

export default CallToActionSection;
