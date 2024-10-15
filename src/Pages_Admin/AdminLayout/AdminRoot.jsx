import { Outlet } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import { Col, Container, Row } from "react-bootstrap";

const AdminRoot = () => {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row>
        {/* Sidebar (AdminNav) */}
        <Col md={3} lg={2} className="px-0">
          <AdminNav />
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="p-5">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminRoot;
