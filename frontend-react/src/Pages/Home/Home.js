import { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import Footer from '../../Components/Footer/Footer';

import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HomeCarousel/>
            <Footer/>
        </Fragment>
    );
}

export default Home