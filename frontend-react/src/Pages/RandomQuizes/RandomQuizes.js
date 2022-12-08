import { Fragment, useState, useEffect} from "react";
import { Container,Card, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import './RandomQuizes.css';
import { toast } from "react-toastify";

const RandomQuizes = () => {
  // getting added questions
  const [attempt, setAttempt] = useState({
    right: 0,
    wrong:0
  });
  const [cQuestion, setCQuestion] = useState({});

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_GET_RANDOM_QUESTIONS_API)
        .then(function(response){
            // toast.success("Successfully Added");
            setQuestions(response.data);
            // window.location.reload(false);
            //console.log(response.data);
        })
        .catch(function(error){
            //console.log(error);
            // toast.error("Failed to Add");
        });
    }, []);
    const getQuestion = () => {
      let remainingQuestion = questions;
      if (remainingQuestion.length === 0){
        toast.error("No More Question");
      }else{
        setCQuestion(remainingQuestion.pop());
        setQuestions(remainingQuestion);
      }
    }
    const submitAnswer = () => {

    }

    return (
      <Fragment>
        <Header />
        <Container>
          <Row>
            <Col className="col-12 col-sm-12 col-md-4 col-lg-3 py-5">
              <p className="text-center fw-bold">Your Progress Chart</p>
              <p className="Right Asnwers">Right Answer: {attempt.right}</p>
              <p className="Wrong Answer">Wrong Answer: {attempt.wrong}</p>
            </Col>
            <Col className="col-12 col-sm-12 col-md-8 col-lg-9 py-5">
              <div className="bg-success">
                <Row className="text-light py-5 px-5">
                  {
                    Object.keys(cQuestion).length === 0 &&
                    <p>
                      Press Next to start!
                    </p>
                  }
                  {
                    Object.keys(cQuestion).length !== 0 &&
                    <Col className="">
                      <p className="fw-bold">
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
                      <Button variant="outline-light " className="fw-bold"
                      onClick={submitAnswer}
                    >
                      Submit
                    </Button>
                    </Col>
                  }
                </Row>
                <Row>
                  <Col>
                      <Button variant="outline-light " className="fw-bold m-3 float-end"
                      onClick={getQuestion}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
}

export default RandomQuizes