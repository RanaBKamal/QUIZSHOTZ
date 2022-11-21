import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <SignUp/> }/>
      </Routes>
    </Router>
  );
}

export default App;
