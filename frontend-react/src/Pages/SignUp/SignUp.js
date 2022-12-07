import { Fragment, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from "axios";

import './SignUp.css';
import '../../App/App.css';


const SignUp = () => {

  const[user, setUser] = useState({
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    postalcode: ''
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  
  const handleSignup=async(e)=>{
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_SIGNUP_API, user);
    } catch (error) {
      console.log(error.message)
    }
  }

    return (
      <Fragment>
        <Header />
        <Container>
          <Row className="signup-page">
            <Col className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center d-none-card">
              <div className="login-card">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg"
                  alt="login-img"
                  className="login-banner-img image-relative"
                />
                <section className="text-center login-text">
                  <small>Welcome to the Quizshotz</small>
                  <h1>Welcome Falano</h1>
                  <small> Lorem ipsum door vu wa lorem door ispum </small>
                </section>
              </div>
            </Col>
            <Col className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center">
              <Form className="py-3 px-5">
                <p className="fs-2 fw-bold">
                  {" "}
                  <span className="login-rect">. </span> Sign Up
                </p>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" name="address" value={user.address} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor"/>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control name='city' value={user.city} onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control name="postalcode" value={user.postalcode} onChange={handleChange}/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Agree our terms and conditions"
                  />
                </Form.Group>

                <Button className="btn btn-lg bg-orange w-100" type="submit" onClick={handleSignup}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </Fragment>
    );
}

export default SignUp