import AdminNav from "./AdminNav";
import { Container, Row, Col, Form, Button, Dropdown} from "react-bootstrap";
import "./admin.css";

const { Fragment } = require("react");

const AddModule = () => {
  return (
    <Fragment>
      <AdminNav />
      <Container>
        <div class="content">
          <Row>
            <Col className="bg-light">
              <p className="fs-1 fw-bold">Admin Question</p>
            </Col>

            <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
              <Form>
                <Form.Label className="fw-bold fs-2 mb-2">
                  Choose your Module
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Module 1
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="text-dark">
                      <Dropdown.Item className="text-dark" href="#/action-1">
                        Module 0
                      </Dropdown.Item>
                      <Dropdown.Item className="text-dark" href="#/action-2">
                        Module 2
                      </Dropdown.Item>
                      <Dropdown.Item className="text-dark" href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Label>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="question here"
                  />
                </Form.Group>
                <Button variant="primary">Add</Button>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Answers here"
                  />
                </Form.Group>
                <Button variant="primary">Add</Button>
              </Form>
            </Col>
            <Col className="mt-5 ">
              <p className="Question">Here is the Question</p>
              <p className="Answers">1. Answer 1</p>
              <p className="Answers">2. Answer 1</p>
              <p className="Answers">3. Answer 3</p>
              <p className="Answers">4. Answer 4</p>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddModule;
