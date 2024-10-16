import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { sign_in_email_pass, sign_in_with_google } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        sign_in_email_pass(email, password)
            .then((res) => {
                console.log(res.user);
                toast.success("Login successfully");
                form.reset();
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const handleGoogle = () => {
        sign_in_with_google()
            .then(() => {
                toast.success("Login Successfully");
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center">Welcome Back!</h2>
                    <p className="text-center">
                        Please login to your account to continue.
                    </p>
                    <Form onSubmit={handleForm}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                />
                                <span
                                    className="input-group-text"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: "pointer" }}
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </span>
                            </div>
                        </Form.Group>

                        <Form.Text className="text-muted">
                            <Link to="/forgot-password">Forget Password?</Link>
                        </Form.Text>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <p>Or login with:</p>
                        <Button
                            onClick={handleGoogle}
                            variant="outline-primary"
                            className="me-2"
                        >
                            <FaGoogle /> Google
                        </Button>
                        <Button variant="outline-primary" className="me-2" disabled>
                            <FaFacebook /> Facebook
                        </Button>
                        <Button variant="outline-primary" disabled>
                            <FaGithub /> GitHub
                        </Button>
                    </div>
                    <p className="text-center mt-3">
                        Don’t have an account?{" "}
                        <Link to="/register">Create a new account</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
