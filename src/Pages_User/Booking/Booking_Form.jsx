import { useContext } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaDollarSign,
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Booking_Form = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const navigate = useNavigate();
    const { title, price, img } = serviceDetails;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const name = form.name.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const booking_data = {
            customer_name: name,
            email,
            phone,
            date,
            service_name: title,
            service_price: price,
            service_img: img,
        };
        fetch("http://localhost:5000/api/v1/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking_data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Booking done");
                    navigate("/my-booking")
                }

            })
            .catch((error) => {
                toast.error(error);
            })
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                {/* Booking Information Card */}
                <Col lg={6} md={8} sm={12} className="mb-4">
                    <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                        <Card.Img
                            variant="top"
                            src={img}
                            alt={title}
                            style={{ maxHeight: "250px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title
                                className="text-center mb-4"
                                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                            >
                                {title}
                            </Card.Title>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <h5 className="text-success">
                                    <FaDollarSign /> {price}
                                </h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Booking Form */}
                <Col lg={6} md={8} sm={12} className="mb-4">
                    <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                        Book Your Service
                    </h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>
                                <FaUser /> Full Name
                            </Form.Label>
                            <Form.Control
                                name="name"
                                defaultValue={user?.displayName}
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>
                                <FaEnvelope /> Email address
                            </Form.Label>
                            <Form.Control
                                defaultValue={user?.email}
                                readOnly
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="mb-3">
                            <Form.Label>
                                <FaPhone /> Phone Number
                            </Form.Label>
                            <Form.Control
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formDate" className="mb-3">
                            <Form.Label>
                                <FaCalendarAlt /> Booking Date
                            </Form.Label>
                            <Form.Control name="date" type="date" required />
                        </Form.Group>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <Button variant="primary" type="submit">
                                Confirm Booking
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking_Form;
