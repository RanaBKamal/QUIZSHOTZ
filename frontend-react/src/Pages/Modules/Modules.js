import { Fragment, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { LaptopFill } from "react-bootstrap-icons";
import axios from 'axios';

import './Modules.css';
import { Container, Row, Col, Card, Button, Badge, Breadcrumb, Pagination } from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const Modules = () => {
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
      <Col className="col-12 col-sm-12 col-md-4 col-lg-3 mb-3 mt-3 col-sm-mobile" key={item._id}>
        <Card className="card-custom">
          <Card.Body>
            <a href="/" className="text-dark">
              <Card.Title className="fw-bold">
                {item.name}
              </Card.Title>
              <Card.Text>
                <Badge bg="orange"> questions</Badge>{" "}
              </Card.Text>
              <Button variant="outline-dark">Preview</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    ));
    return (
      <Fragment>
        <Header />
        <Container>
          <p className="mt-3 fs-3 fw-bold">
            {" "}
            <LaptopFill className="laptop" /> Take A Quiz Shot{" "}
          </p>

          <Breadcrumb>
            <Breadcrumb.Item className="bread-text" href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="active-bread">
              Modules
            </Breadcrumb.Item>
          </Breadcrumb>

          <hr width="10%" />

          <Row className="my-5 bg-light ">
            {moduleElements}
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
}

export default Modules