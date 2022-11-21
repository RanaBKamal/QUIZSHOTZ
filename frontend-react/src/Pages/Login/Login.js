import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Login.css';

const Login = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                login page
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default Login