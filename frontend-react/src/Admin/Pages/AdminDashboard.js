import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import { Card, Container, Row, Col} from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Fragment } from "react";

const AdminDashboard = () => {
  return (
    <Fragment>
        <ToastContainer/>
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
