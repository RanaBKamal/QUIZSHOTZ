import { Fragment } from "react";
import './Footer.css';

const Footer = () =>{
    return (
        <Fragment>
            <footer class="footer mt-auto py-3 bg-darkblue-custom">
                <div class="container text-center">
                    <span class="text-light"> &copy; QuizShotz.com 2022 All Rights Reserved </span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer