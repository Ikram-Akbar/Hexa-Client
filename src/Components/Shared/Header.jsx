import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Service" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact" },
];

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hexa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navItems.map(({ path, name }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {name}
              </NavLink>
            ))}
          </Nav>
          <div >
            <Image
              src="https://via.placeholder.com/40"
              roundedCircle
              className="mx-3"
              alt="User Avatar"
              width={40}
              height={40}
            />
            <Button as={Link} to="/login" variant="outline-primary" className="ml-3">
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
