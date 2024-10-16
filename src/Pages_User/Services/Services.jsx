import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Service_Card from "./Service_Card";

const Services = () => {
    const services = useLoaderData();

    return (
        <div style={{ padding: '20px' }}>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mb-4">Our Exclusive Services</h1>
                        <p className="text-center mb-5">
                            We offer a variety of top-quality services to cater to your needs.
                            Explore our offerings below and find the best option for you.
                        </p>
                    </Col>
                </Row>

                <Row>
                    {
                        services.map((service) => (
                            <Col key={service._id} md={4} lg={4} className="mb-4">
                                <Service_Card service={service} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;
