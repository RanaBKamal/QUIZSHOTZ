import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Modules.css';

const Modules = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                modules page
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default Modules