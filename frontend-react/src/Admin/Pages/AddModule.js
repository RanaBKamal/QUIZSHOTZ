import AdminNav from './AdminNav';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Archive, PencilSquare } from "react-bootstrap-icons";
import './admin.css'

const { Fragment } = require("react")
const AddModule = () => {
    return (
      <Fragment>
        <AdminNav />
        <Container>
          <div className="content">
            <Row>
              <Col className="bg-light">
                <p className="fs-1 fw-bold">Admin Module</p>
              </Col>

              <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <Form>
                  <Form.Label className="fw-bold fs-2 mb-2">
                    Example textarea
                  </Form.Label>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Add Module Name</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="module name"
                    />
                  </Form.Group>
                  <Button variant="primary">Add</Button>
                </Form>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
                <Card bg="primary text-light">
                  <Card.Body>
                    <p className="fw-bold">Java Module</p>
                    <div>
                      <span>
                        <a className="" href="/">
                          <Archive
                            className=" text-light"
                            cursor="pointer"
                            size="32"
                          />
                        </a>
                      </span>
                      <span>
                        <a className="" href="/">
                          <PencilSquare
                            className=" text-light "
                            cursor="pointer"
                            size={32}
                          />
                        </a>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
                <Card bg="primary text-light">
                  <Card.Body>
                    <p className="fw-bold">English Module</p>
                    <div>
                      <span>
                        <a className="" href="/">
                          <Archive
                            className=" text-light"
                            cursor="pointer"
                            size="32"
                          />
                        </a>
                      </span>
                      <span>
                        <a className="" href="/">
                          <PencilSquare
                            className=" text-light "
                            cursor="pointer"
                            size={32}
                          />
                        </a>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
                <Card bg="primary text-light">
                  <Card.Body>
                    <p className="fw-bold">QBasic Module</p>
                    <div>
                      <span>
                        <a className="" href="/">
                          <Archive
                            className=" text-light"
                            cursor="pointer"
                            size="32"
                          />
                        </a>
                      </span>
                      <span>
                        <a className="" href="/">
                          <PencilSquare
                            className=" text-light "
                            cursor="pointer"
                            size={32}
                          />
                        </a>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
}

export default AddModule