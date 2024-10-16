import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { FaDollarSign, FaClock, FaCheckCircle, FaArrowLeft, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Service_Details = () => {
    const serviceDetails = useLoaderData();
    const { title, description, length, img, price, facility } = serviceDetails;
    const navigate = useNavigate(); // For navigation

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                {/* Service Image and Basic Info */}
                <Col lg={6} md={8} sm={12} className="mb-4">
                    <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src={img} alt={title} style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title className="text-center mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                {title}
                            </Card.Title>
                            <Card.Text className="text-muted" style={{ textAlign: 'justify' }}>
                                {description}
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <h5 className="text-success">
                                    <FaDollarSign /> {price}
                                </h5>
                                <h6 className="text-muted">
                                    <FaClock /> {length} hours
                                </h6>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Facilities List */}
                <Col lg={6} md={8} sm={12} className="mb-4">
                    <h3 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Facilities</h3>
                    <ListGroup>
                        {facility.map((item, index) => (
                            <ListGroup.Item
                                key={index}
                                className="d-flex align-items-center"
                                style={{ padding: '15px', marginBottom: '10px', background: '#f8f9fa', borderRadius: '10px' }}
                            >
                                <FaCheckCircle className="text-primary me-3" size={24} />
                                <div>
                                    <strong>{item.name}</strong>
                                    <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                                        {item.details}
                                    </p>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    {/* Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                        {/* Go Back Button */}
                        <Button variant="secondary" onClick={() => navigate(-1)}>
                            <FaArrowLeft /> Go Back
                        </Button>

                        {/* Booking Button */}
                        <Button variant="success" onClick={() => navigate(`/booking/${serviceDetails._id}`)}>
                            <FaCalendarCheck /> Book Now
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service_Details;
