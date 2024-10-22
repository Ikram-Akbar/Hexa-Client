import { Form, Button, Row, Col } from "react-bootstrap";

const Service_Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.serviceName.value;
        const description = form.description.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const features = form.features.value.replace(/\s*,\s*/g, ',').split(',');
        const available_slots = form.availableSlots.value.replace(/\s*,\s*/g, ',').split(',');
;

        const service_data = {
            service_name,
            description,
            price: parseFloat(price),
            duration,
            features,
            available_slots,
        };

        console.log(service_data);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="serviceName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control type="text" name="serviceName" required />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" required />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" required />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" name="duration" required />
                    </Form.Group>
                </Col>
            </Row>

            {/* Simplified features section as comma-separated values */}
            <Form.Group controlId="features">
                <Form.Label>Features (comma-separated)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter features separated by commas"
                    name="features"
                    required
                />
            </Form.Group>

            {/* Simplified time slots section as comma-separated values */}
            <Form.Group controlId="availableSlots">
                <Form.Label>Available Slots (comma-separated)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter time slots separated by commas"
                    name="availableSlots"
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Service_Form;
