import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './RandomQuizes.css';

const RandomQuizes = () => {
    return (
        <Fragment>
            <Header/>
            <Container>
                random quizes page
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default RandomQuizes