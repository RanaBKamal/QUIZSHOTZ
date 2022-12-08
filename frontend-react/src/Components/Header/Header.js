import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  NavDropdown,
  Dropdown
} from "react-bootstrap";
import './Header.css';
import 'react-toastify/dist/ReactToastify.css';
import * as Icon from 'react-bootstrap-icons';
const Header = () => {
    const logoutUser = () => {
      localStorage.removeItem("loggedin_user");
      window.location.reload(false);
    }
    const loggedInUser = 
      JSON.parse(
        localStorage.getItem("loggedin_user") !== null ?
          localStorage.getItem("loggedin_user") : 
          "{}"
      );
    return (
      <Fragment>
        <Navbar expand="lg" className="navbar-custom py-3 bg-darkblue-custom">
          <Container className="">
            <Navbar.Brand className="fw-bold text-dark">
              {" "}
              <NavLink to="/">QUIZSHOT</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink to="/modules">Modules</NavLink>
                &nbsp;&nbsp;
                <NavLink to="/try-random-quizes">Try Random Quizes</NavLink>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 ps-2"
                  aria-label="Search"
                />
                <Button variant="outline-light" className="me-4">
                  Search
                </Button>
              </Form>
              {
                Object.keys(loggedInUser).length === 0 &&
                <div>
                  <NavLink to="/login">Login</NavLink> &nbsp;|&nbsp;
                  <NavLink to="/signup">SignUp</NavLink>
                </div>
              }
              {
                Object.keys(loggedInUser).length !== 0 &&
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Icon.Person/> {loggedInUser?.username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant='dark'>
                    {
                      Object.keys(loggedInUser).length !== 0 &&
                        <Dropdown.Item href='/admin' className='pt-0 pb-0 mt-0 mb-0'>
                          {
                            loggedInUser.roles.includes("ROLE_ADMIN") && 
                              <span>Admin Dashboard</span>
                          }
                        </Dropdown.Item>
                    }
                    <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              }
              <NavDropdown
                title="Falano"
                id="basic-nav-dropdown"
                className="d-none"
              >
                <NavDropdown.Item href="/userprofile" className="text-dark">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className="text-dark">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" className="text-dark">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ToastContainer/>
      </Fragment>
    );
}

export default Header