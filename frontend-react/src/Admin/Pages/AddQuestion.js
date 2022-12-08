import AdminNav from "./AdminNav";
import { Container, Row, Col, Card} from "react-bootstrap";
import { Archive, PencilSquare } from "react-bootstrap-icons";
import "./admin.css";

import { Fragment, useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const AddQuestion = () => {

    const [modules, setModules] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL+process.env.REACT_APP_GET_MODULE_API)
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
        <Col className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 pt-3" key={item._id}>
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
                <div>
                    <NavLink 
                        to={`/admin/add-question/${item._id}`}
                        className="btn btn-sm btn-default btn-success mt-3"
                    >
                        Add Question
                    </NavLink>
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
              <p className="fs-1 fw-bold">Choose Module to add Question</p>
            </Col>
            </Row>
            <Row>
                {moduleElements}
            </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddQuestion;