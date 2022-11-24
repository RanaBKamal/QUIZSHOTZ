import { Fragment } from 'react';
import { Carousel, Row, Col, Card, Container, Form, Button } from 'react-bootstrap';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
      <Fragment>
        <Carousel fade variant="dark">
          <Carousel.Item>
            <div className="carousel-grad"></div>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/12906178/pexels-photo-12906178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption className="text-light">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-grad"></div>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption className="text-light">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-grad"></div>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

            <Carousel.Caption className="text-light">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className='mt-5 mb-5'>
            <Row className='gap-3'>
            <Col>
                <Card border="primary" style={{ width: "18rem" }}>
                
                <Card.Body>
                    <Card.Title>Take a QuizShotz</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="secondary" style={{ width: "18rem" }}>
                
                <Card.Body>
                    <Card.Title>Learn From the best</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="success" style={{ width: "18rem" }}>
                
                <Card.Body>
                    <Card.Title>Try your best</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="danger" style={{ width: "18rem" }}>
                
                <Card.Body>
                    <Card.Title>Danger Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>

            <Col className="  bg-darkblue-custom text-dark col-xl-12 col-xxl-12 px-4 py-5 mt-5">
              
              <Row className="align-items-center g-lg-5 py-5 ">
                <div className="col-lg-7 text-center text-lg-start text-light">
                  <h1 className="display-4 fw-bold lh-1 mb-3">Come On Join us Register with us</h1>
                  <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                  <Form className='px-5 bg-light py-5 border rounded-1 needs-validation' novalidate>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Agree with our terms & conditions" required />
                    </Form.Group>
                    <Button className='btn btn-lg bg-orange w-100' type="submit">
                      Signup
                    </Button>
                  </Form>
                </div>
              </Row>
          </Col>
        </Container>
      </Fragment>
    );
}

export default HomeCarousel