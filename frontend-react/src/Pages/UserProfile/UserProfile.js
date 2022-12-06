import { Fragment } from "react";
import { Container, Row, Col, Accordion, Form } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./UserProfile.css";


const UserProfile = () => {
  return (
    <Fragment>
    <Header />
      <Container className="">
        <Row>
          <Col>
            <p className="fw-bold fs-2">UserName Profile Info</p>
          </Col>
        </Row>
        <Row className="bg-light px-5 py-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Basic Info &nbsp; <InfoCircle color="royalblue" />{" "}
              </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value="falano@gmail.com"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value="*******"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value="123 Main Street"
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value="Missisauga"
                      disabled
                    />
                  </Form.Group>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Success Rate</Accordion.Header>
              <Accordion.Body>
                {/* Here goes all user quiz success rate */}
                <p>Total Quiz Attempts: 12</p>
                <p>Success Rate: 50%</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default UserProfile;
