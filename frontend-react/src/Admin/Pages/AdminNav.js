import "./admin.css";
import { Row, Col} from 'react-bootstrap';

const { Fragment } = require("react");

const AdminNav = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <Row>
          <Col className="col-12">
            <p className="text-center mt-3 fs-2 fw-bold">QuizShotz</p>
            <p className="mt-5 mb-5 text-center fw-lighter font-monospace text-muted">
              Welcome, Admin
            </p>
          </Col>
          <Col className="col-12">
            <a className="active" href="/admin">
              Home
            </a>
            <a href="/admin/add-module">Add Module</a>
            <a href="/admin/add-question">Add Question</a>
            <a href="/logout" className="">Logout</a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default AdminNav