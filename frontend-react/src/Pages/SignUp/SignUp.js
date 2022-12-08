import { Fragment, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from "axios";
import { toast } from 'react-toastify';
import './SignUp.css';
import '../../App/App.css';


const SignUp = () => {

  const[user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    address: '',
    phone: '',
    postalcode: '',
    role:["user"]
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  
  const handleSignup=async(e)=>{
    e.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_URL)
    axios.post(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_SIGNUP_API, user)
    .then(function(response){
      toast.success('Successfully registered');
    })
    .catch(function(error){
      console.log(error);
      toast.error('Failed to Registered');
    });
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
                  <h1>Welcome To QUIZSHOT</h1>
                  <small> Full Stack Javascript 02 |CSAM 2022F, T3 <br/>Lambton College Mississauga. </small>
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
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange}/>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" name="address" value={user.address} onChange={handleChange}/>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPostalCode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control placeholder="Postal Code" name="postalcode" value={user.postalcode} onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Phone" name="phone" value={user.phone} onChange={handleChange}/>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
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