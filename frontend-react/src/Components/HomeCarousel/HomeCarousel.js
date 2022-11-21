import { Fragment } from 'react';
import {Carousel} from 'react-bootstrap';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <Fragment>
            <Carousel fade variant="dark">
                <Carousel.Item>
                <div className="carousel-grad"></div>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://images.pexels.com/photos/12906178/pexels-photo-12906178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-grad"></div>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-grad"></div>
                <img
                    className="d-block w-100 carousel-img"
                    src="https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Third slide"
                />

                <Carousel.Caption className="text-light">
                    <h5>Third slide label</h5>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Fragment>
    );
}

export default HomeCarousel