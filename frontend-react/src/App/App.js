import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Modules from "../Pages/Modules/Modules";
import RandomQuizes from "../Pages/RandomQuizes/RandomQuizes";
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import UserProfile from "../Pages/UserProfile/UserProfile";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/try-random-quizes" element={<RandomQuizes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
