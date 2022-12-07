import { Fragment, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';
import './Login.css';
import axios from "axios";

const Login = () => {

    const[user, setUser]= useState({
        email: '',
        password: ''
    });

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    };

    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_SIGNIN_API,user,{
                headers: {
                    'x-access-token':''
                }
            })
        } catch (error) {          
        }
    }


    return (
        <Fragment>
            <Header/>
            <Container>
                <Row className='login-page '>
                    <Col className='col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center d-none-card'>
                        <div className='login-card'>
                            <img src='https://static.vecteezy.com/system/resources/previews/007/972/540/non_2x/abstract-background-graphic-desktop-wallpaper-hd-yellow-background-with-stripes-abstract-background-texture-design-bright-poster-banner-yellow-and-blue-background-illustration-free-vector.jpg' alt='login-img' className='login-banner-img image-relative' />
                            <section className='text-center login-text'>
                                <small>Nice to See you back</small>
                                <h1>Welcome Back</h1>
                                <small> Lorem ipsum door vu wa lorem door ispum </small>
                            </section>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 bg-light mt-5 mb-5 justify-evenly items-center'>
                        <Form className=' py-5 px-5'>
                            <p className='fs-2 fw-bold'> <span className='login-rect'>. </span> Login Form</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button className='btn btn-lg bg-orange w-100' type="submit" onClick={handleLogin}>
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