import { Fragment } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './SignUp.css';
import '../../App/App.css';

const SignUp = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                <Row className='login-page '>
                    <Col className='col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                        <div className=''>
                            <img src='https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg' alt='login-img' className='login-banner-img image-relative' />
                            <section className='text-center'>
                                <small>Welcome to the Quizshotz</small>
                                <h1>Welcome Falano</h1>
                                <small> Lorem ipsum door vu wa lorem door ispum </small>
                            </section>
                        </div>
                    </Col>
                    <Col className='col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                        <Form className='py-3 px-5'>
                            <p className='fs-2 fw-bold'> <span className='login-rect'>. </span> Sign Up</p>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
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
                                <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Agree our terms and conditions" />
                            </Form.Group>

                            <Button className='btn btn-lg bg-orange w-100'  type="submit">
                                Submit
                            </Button>
                            </Form>
                    </Col>
                </Row>
            </Container>
            <Footer>

            </Footer>
        </Fragment>
    );
}

export default SignUp