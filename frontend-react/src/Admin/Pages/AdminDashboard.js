import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import { Card, Container, Row, Col} from "react-bootstrap";

const { Fragment } = require("react");

const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminNav>
        <Container>
          <div className="content">
            <Row>
                <Col>
            <Card bg="warning">
              <Card.Title>Total Module</Card.Title>
              <Card.Body>1</Card.Body>
            </Card>
                </Col>
            </Row>
          </div>
        </Container>
      </AdminNav>
      <Outlet />
    </Fragment>
  );
};

export default AdminDashboard;
