import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTools,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={collapsed ? collapsedStyle : expandedStyle}>
      {/* Project Name */}
      <div style={headerStyle}>
        <h5
          style={{
            color: "white",
            fontSize: collapsed ? "20px" : "24px",
            margin: 0,
          }}
        >
          {collapsed ? "H" : "Hexa"}
        </h5>
        <span
          onClick={toggleCollapse}
          style={{ cursor: "pointer", color: "white" }}
        >
          {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
        </span>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column" style={{ color: "white" }}>
        <Nav.Link href="/" style={navLinkStyle}>
          <FaHome style={iconStyle} />
          {!collapsed && <span>Home</span>}
        </Nav.Link>

        <Nav.Link href="/profile" style={navLinkStyle}>
          <FaUser style={iconStyle} />
          {!collapsed && <span>Profile</span>}
        </Nav.Link>

        {/* Dropdown */}
        <NavDropdown
          title={
            <>
              <FaTools style={iconStyle} />
              {!collapsed && <span>Tools</span>}
            </>
          }
          id="nav-dropdown"
          style={{ color: "white" }}
        >
          <NavDropdown.Item href="/tools/analytics">Analytics</NavDropdown.Item>
          <NavDropdown.Item href="/tools/reports">Reports</NavDropdown.Item>
          <NavDropdown.Item href="/tools/settings">Settings</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/settings" style={navLinkStyle}>
          <FaCog style={iconStyle} />
          {!collapsed && <span>Settings</span>}
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/add-service" style={navLinkStyle}>
          <FaCog style={iconStyle} />
          {!collapsed && <span>Add a Service Form </span>}
        </Nav.Link>

        <Nav.Link href="/logout" style={navLinkStyle}>
          <FaSignOutAlt style={iconStyle} />
          {!collapsed && <span>Logout</span>}
        </Nav.Link>
      </Nav>
    </div>
  );
};

// Styling
const expandedStyle = {
  width: "250px",
  height: "100vh",
  backgroundColor: "#343a40",
  padding: "20px",
  position: "fixed",
  transition: "width 0.3s",
};

const collapsedStyle = {
  width: "80px",
  height: "100vh",
  backgroundColor: "#343a40",
  padding: "20px",
  position: "fixed",
  transition: "width 0.3s",
};

const navLinkStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "10px 15px",
  textDecoration: "none",
  fontSize: "18px",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
  paddingBottom: "10px",
  borderBottom: "1px solid white",
};

export default AdminNav;
