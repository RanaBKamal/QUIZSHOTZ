import AdminNav from './AdminNav';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Archive, PencilSquare } from "react-bootstrap-icons";
import './admin.css'
import { toast } from 'react-toastify';
import axios from 'axios';

import { Fragment, useEffect, useState } from "react";

const AddModule = () => {
    const[module, setModule]= useState({
        name: '',
        type: 'All'
    });

    const handleChange=(e)=>{
        setModule({...module, [e.target.name]:e.target.value})
    };
    const addModule = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_ADMIN_ADD_MODULE_API, module, {
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

    const loggedInUser = 
      JSON.parse(
        localStorage.getItem("loggedin_user") !== null ?
          localStorage.getItem("loggedin_user") : 
          "{}"
      );

    const [modules, setModules] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_GET_MODULES_API)
        .then(function(response){
            // toast.success("Successfully Added");
            setModules(response.data);
            // window.location.reload(false);
        })
        .catch(function(error){
            // console.log(error);
            // toast.error("Failed to Add");
        });
    }, []);
    const moduleElements = modules.map((item) =>(
        <Col className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2" key={item._id}>
            <Card bg="primary text-light">
                <Card.Body>
                <p className="fw-bold">{item.name}</p>
                <div>
                    <span>
                        <Archive
                        className=" text-light"
                        cursor="pointer"
                        size="32"
                        />
                    </span>
                    <span>
                        <PencilSquare
                        className=" text-light "
                        cursor="pointer"
                        size={32}
                        />
                    </span>
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
                <p className="fs-1 fw-bold">Admin Module</p>
              </Col>

              <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <Form>
                  <Form.Label className="fw-bold fs-2 mb-2">
                    Enter Module Name
                  </Form.Label>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Add Module Name</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={1}
                      placeholder="Module Name"
                      name="name"
                      value={module.name} onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={addModule}>Add</Button>
                </Form>
              </Col>
            </Row>
            <Row className="mt-5">
                {moduleElements}
            </Row>
          </div>
        </Container>
      </Fragment>
    );
}

export default AddModule