import { Fragment } from "react";
import './Footer.css';

const Footer = () =>{
    return (
        <Fragment>
            <footer className="footer mt-auto py-3 bg-darkblue-custom">
                <div className="container text-center">
                    <span className="text-light"> &copy; QuizShotz.com 2022 All Rights Reserved </span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer