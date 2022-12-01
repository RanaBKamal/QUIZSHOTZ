import { Fragment} from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './RandomQuizes.css';

const RandomQuizes = () => {
    return (
      <Fragment>
        <Header />
        <Container>
          <Row>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 py-5">
              <p className="text-center fw-bold">Your Progress Chart</p>
              <p className="Right Asnwers">Right Answer: 1</p>
              <p className="Wrong Answer">Wrong Answer: 5</p>
            </Col>
            <Col className="col-12 col-sm-12 col-md-8 col-lg-9 py-5">
              <div className="bg-success">
                <Row className="text-light py-5 px-5">
                  <Col className="">
                    <p className="fw-bold">
                      Question 1:{" "}
                      <span>
                        What is Sandip dais favourite worldcup team ??
                      </span>
                    </p>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`Spain-${type}`}
                          label={`Spain ${type}`}
                        />
                        <Form.Check
                          type={type}
                          id={`Germany-${type}`}
                          label={`Germany ${type}`}
                        />
                        <Form.Check
                          type={type}
                          id={`Costa Rica-${type}`}
                          label={`Costa Rica ${type}`}
                        />
                        <Form.Check
                          type={type}
                          id={`Argentina-${type}`}
                          label={`Argentina ${type}`}
                        />
                      </div>
                    ))}
                    <Button variant="outline-light" className="fw-bold">
                      Previous
                    </Button>
                    <Button variant="outline-light " className="fw-bold">
                      Next
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
        <Footer />
      </Fragment>
    );
}

export default RandomQuizes