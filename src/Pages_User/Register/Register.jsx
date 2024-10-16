import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const { create_user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const imgUrl = form.imgUrl.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const newUserData = { name, email, imgUrl, phone, password };
        console.log(newUserData);
        create_user(email, password)
            .then(() => {
                toast.success("user created successfully");
                form.reset();
                navigate("/login")
                
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center">Create an Account</h2>
                    <p className="text-center">Fill in the details below to register.</p>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone (optional)</Form.Label>
                            <Form.Control
                                name="phone"
                                type="tel"
                                placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicImgUrl">
                            <Form.Label>Image URL (optional)</Form.Label>
                            <Form.Control
                                name="imgUrl"
                                type="text"
                                placeholder="Enter image URL" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    required
                                />
                                <span
                                    className="input-group-text"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="input-group">
                                <Form.Control

                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    required
                                />
                                <span
                                    className="input-group-text"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Register
                        </Button>
                    </Form>
                    <p className="text-center mt-3">
                        By creating an account, you agree to our{" "}
                        <Link to="/TermsAndConditions">Terms and Conditions</Link>.
                    </p>
                    <p className="text-center">
                        Already have an account? <Link to="/">Login here</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
