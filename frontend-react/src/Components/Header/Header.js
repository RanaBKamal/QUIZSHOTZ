import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Form} from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="navbar-custom py-3 bg-darkblue-custom">
                <Container className=''>
                    <Navbar.Brand className='fw-bold text-dark'> 
                        {" "}
                        <NavLink to="/">
                            QUIZSHOT
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                        >
                        <NavLink to="/modules">
                            Modules
                        </NavLink>
                        &nbsp;&nbsp;
                        <NavLink to="/try-random-quizes">
                            Try Random Quizes
                        </NavLink>
                        </Nav>
                        <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light" className="me-4">
                            Search
                        </Button>
                        </Form>
                        <NavLink
                            to="/login"
                        >
                            Login
                        </NavLink> &nbsp;|&nbsp; 
                        
                        <NavLink to="/signup">
                            SignUp
                        </NavLink>
                        {/* <NavDropdown title="Sandip Giri" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                        </NavDropdown> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Header