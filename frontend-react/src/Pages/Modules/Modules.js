import { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { LaptopFill } from "react-bootstrap-icons";
import './Modules.css';
import { Container, Row, Col, Card, Button, Badge, Breadcrumb, Pagination } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Modules = () => {
    return (
      <Fragment>
        <Header />
        <Container>
          <p className="mt-3 fs-3 fw-bold">
            {" "}
            <LaptopFill className="laptop" /> Take A Quiz Shot{" "}
          </p>

          <Breadcrumb>
            <Breadcrumb.Item className="bread-text" href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="active-bread">
              Modules
            </Breadcrumb.Item>
          </Breadcrumb>

          <hr width="10%" />

          <Row className="my-5 bg-lightblue">
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      C# Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Java Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">12 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Ruby Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">20 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      LeetCode Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">15 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Moodle Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">14 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      PL-SQL Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">18 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      SQL Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">31 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Fortan challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card className="card-custom">
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      React JS Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="orange">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Pagination className='justify-content-end text-dark'>{items}</Pagination>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
}

export default Modules