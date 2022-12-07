import { Fragment } from 'react';
import { Carousel, Row, Col, Card, Container, Button} from 'react-bootstrap';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
      <Fragment>
        <Carousel fade variant="dark">
          <Carousel.Item>
            <div className="carousel-grad"></div>
            <img
              className="d-block w-100 carousel-img"
              src="https://www.shutterstock.com/image-photo/woman-teacher-elementary-age-kids-260nw-1009737007.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-light">
              <h4>First slide label</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="mt-5 mb-5">
          <Row className="gap-3">
            <Col>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Take a QuizShotz</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Learn From the best</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="success" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Try your best</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="danger" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Danger Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Col className="  bg-darkblue-custom text-dark col-xl-12 col-xxl-12 px-4 py-5 mt-5">
            <Row className="align-items-center g-lg-5 py-5 ">
              <div className="col-lg-7 text-center text-lg-start text-light">
                <h1 className="display-4 fw-bold lh-1 mb-3">
                  Empower Yourself take the right quiz
                </h1>
                <p className="col-lg-10 fs-5">
                  Help every student confidently learn anything, no matter what
                  theyre striving to achieve. Using QuizShotz free study sets,
                  study modes and in-class game Checkpoint, you can instantly
                  create a more engaged classroom. Students and teachers can
                  sign up and study for free.
                </p>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <div className="image-column">
                  <img
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="image-col"
                  />
                </div>
              </div>
            </Row>
          </Col>

          <Col className="text-center p-5">
            <p className="fs-3 fw-bold">Ready to start getting better results?</p>
            <Button variant='primary' className=''>Register Now</Button>
          </Col>
        </Container>
      </Fragment>
    );
}

export default HomeCarousel