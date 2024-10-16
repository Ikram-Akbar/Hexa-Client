import { useContext } from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Service" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact" },
  { path: "/my-booking", name: "My Booking" }
];

const Header = () => {
  const { user, log_out } = useContext(AuthContext);
  console.log(user)
  const handle_log_out = () => {
    log_out()
      .then(() => {
        toast.success("user logout successfully")
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
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
          {
            user ? <>
              <div >
                <Image
                  src={user.photoURL}
                  roundedCircle
                  className="mx-3"
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
                <Button onClick={handle_log_out} variant="outline-primary" className="ml-3">
                  Logout
                </Button>
              </div></> : <>
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
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
