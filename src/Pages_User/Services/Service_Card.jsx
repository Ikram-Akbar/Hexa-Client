/* eslint-disable react/prop-types */
import { Card, Button } from 'react-bootstrap';
import { FaTag, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service_Card = ({ service }) => {
    const { title, _id, price, img } = service;

    return (
        <Card className="mb-4" style={{ width: '100%' }}>
            <Card.Img variant="top" src={img} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="text-center">
                <Card.Title className="mb-3">
                    <FaTag /> {title}
                </Card.Title>
                <Card.Text className="mb-4">
                    <FaDollarSign /> <strong>Price:</strong> ${price}
                </Card.Text>
                <Button as={Link} to={`/services/${_id}`} variant="primary" className="w-100">
                    <FaInfoCircle /> Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Service_Card;
