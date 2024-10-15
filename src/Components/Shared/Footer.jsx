import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <h5 style={headingStyle}>About Us</h5>
            <p style={paragraphStyle}>
              We are a dedicated team committed to providing the best services
              to our customers. Our goal is to ensure customer satisfaction and
              quality service.
            </p>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <h5 style={headingStyle}>Quick Links</h5>
            <ul className="list-unstyled" style={listStyle}>
              <li>
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={linkStyle}>
                  About
                </a>
              </li>
              <li>
                <a href="/services" style={linkStyle}>
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" style={linkStyle}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <h5 style={headingStyle}>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                style={iconLinkStyle}
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                style={iconLinkStyle}
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                style={iconLinkStyle}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                style={iconLinkStyle}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p style={footerBottomStyle}>
              &copy; {new Date().getFullYear()} Your Company. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Styling
const footerStyle = {
  background: "linear-gradient(45deg, #007bff, #6610f2)",
  color: "white",
  padding: "40px 0",
};

const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "15px",
};

const paragraphStyle = {
  fontSize: "1rem",
};

const listStyle = {
  paddingLeft: "0",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s",
};

const iconLinkStyle = {
  color: "white",
  marginRight: "15px",
  transition: "transform 0.3s",
};

const footerBottomStyle = {
  marginTop: "20px",
  fontSize: "0.875rem",
};

// Hover Effects
const handleMouseEnter = (e) => {
  e.target.style.color = "#f8f9fa";
};

const handleMouseLeave = (e) => {
  e.target.style.color = "white";
};

// Add event listeners for hover effects
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", handleMouseEnter);
  link.addEventListener("mouseleave", handleMouseLeave);
});

export default Footer;
