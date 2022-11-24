import { Fragment } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';

const Login = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                <Row className='login-page '>
                    <Col className='col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                        <div className=''>
                            <img src='https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg' alt='login-img' className='login-banner-img image-relative' />
                            <section className='text-center'>
                                <small>Nice to See you back</small>
                                <h1>Welcome Back</h1>
                                <small> Lorem ipsum door vu wa lorem door ispum </small>
                            </section>
                        </div>
                    </Col>
                    <Col className='col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                        <Form className=' py-5 px-5'>
                            <p className='fs-2 fw-bold'> <span className='login-rect'>. </span> Login Form</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button className='btn btn-lg bg-orange w-100' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default Login