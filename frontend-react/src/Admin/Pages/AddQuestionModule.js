
import AdminNav from "./AdminNav";
import { Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import "./admin.css";

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddQuestionModule = () => {
    const {moduleId} = useParams();
    const [module, setModule] = useState({});
    const [question, setQuestion] = useState({
        module: '',
        question: '',
        type: 'All',
        option: [],
        answer: ''
    });
    useEffect(() => {
       axios.get(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_GET_MODULE_API+`/${moduleId}`)
        .then(function(response){
            // toast.success("Successfully Added");
            setModule(response.data);
            setQuestion({...question, 'module':response.data[0].name});
            // window.location.reload(false);
        })
        .catch(function(error){
            console.log(error);
            // toast.error("Failed to Add");
        }); 
    }, [moduleId, question]);

    const loggedInUser = 
      JSON.parse(
        localStorage.getItem("loggedin_user") !== null ?
          localStorage.getItem("loggedin_user") : 
          "{}"
      );

    const handleChange=(e)=>{
        if (e.target.name === "option"){
            let opts = e.target.value;
            setQuestion({...question, [e.target.name]:opts.split(",")});
        }else{
            setQuestion({...question, [e.target.name]:e.target.value});
        }
    };
    const addQuestion = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ADMIN_ADD_QUESTION_API, question, {
            headers:{
                'x-access-token': loggedInUser.accessToken
            }
        })
        .then(function(response){
            toast.success("Successfully Added");
            window.location.reload(false);
        })
        .catch(function(error){
            console.log(error);
            toast.error("Failed to Add");
        });
    }


    // getting added questions
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_GET_QUESTIONS_API+`/${moduleId}`)
        .then(function(response){
            // toast.success("Successfully Added");
            setQuestions(response.data);
            // window.location.reload(false);
        })
        .catch(function(error){
            // console.log(error);
            // toast.error("Failed to Add");
        });
    }, [moduleId]);
    const questionElements = questions.map((item) =>(
        <Col className="col-6 col-sm-6 mt-3" key={item._id}>
            <Card bg="primary text-light">
                <Card.Body>
                    <p className="fw-bold">Question: {item.question}</p>
                    <div>
                        {
                            item.option.map((item1) =>(
                                <li key={item1}>{item1}</li>
                            ))
                        }
                    </div>
                    <div>
                        <p>
                            Answer: {item.answer}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ));


    return (
    <Fragment>
      <AdminNav />
      <Container>
        <div className="content">
          <Row>
            <Col className="bg-light">
              <p className="fs-1 fw-bold">Admin Question</p>
            </Col>

            <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
              <Form>
                <Form.Label className="fw-bold fs-2 mb-2">
                  Your Module:<br/>
                  <h4>
                      {module[0]?.name}
                  </h4>
                </Form.Label>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="question here"
                    name="question"
                    value={question.question}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Options</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Options in an array form option1, option2, option3"
                    name="option"
                    value={question.option}
                    onChange={handleChange}
                  />
                </Form.Group>
                 <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Answer</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Answer from any options"
                    name="answer"
                    value={question.answer}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="success" onClick={addQuestion}>Add</Button>
              </Form>
            </Col>
          </Row>
          <Row>
              {questionElements}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddQuestionModule;
