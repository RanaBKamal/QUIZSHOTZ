import {Container, Form, Button, Nav, Navbar, NavDropdown, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="navbar-custom py-3">
        <Container>
          <Navbar.Brand href="#">
            {" "}
            <a href="/" className="title-text">
              KAHOOT
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="ms-5">
                Modules
              </Nav.Link>
              <Nav.Link href="#action2">Try Randon Qizzes</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-4">
                Search
              </Button>
            </Form>
            <Nav.Link href="#action2" className="me-2 fw-bolder">
              Log in
            </Nav.Link>
            <Button
              variant="primary"
              href="#action2"
              className="me-2 fw-bolder"
            >
              Sign up
            </Button>
            {/* <NavDropdown title="Sandip Giri" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </div>
  );
}

export default App;
