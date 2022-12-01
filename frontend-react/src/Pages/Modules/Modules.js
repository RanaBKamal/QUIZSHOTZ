import { Fragment } from 'react';
// import { Container, Section } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Modules.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Modules = () => {
    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="my-5 bg-light shadow">
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      C# Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Java Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">12 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Ruby Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">20 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      LeetCode Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">15 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      Moodle Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">14 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                        PL-SQL Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">18 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      SQL Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">31 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                        Fortan challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile">
              <Card>
                <Card.Body>
                  <a href="/" className="text-dark">
                    <Card.Title className="fw-bold">
                      React JS Quiz challenges
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="primary">10 questions</Badge>{" "}
                    </Card.Text>
                    <Button variant="outline-dark">Preview</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
}

export default Modules