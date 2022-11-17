import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <h1>QUIZSHOT</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
