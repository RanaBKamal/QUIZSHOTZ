import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Modules from "../Pages/Modules/Modules";
import RandomQuizes from "../Pages/RandomQuizes/RandomQuizes";
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import UserProfile from "../Pages/UserProfile/UserProfile";

import AdminDashboard from '../Admin/Pages/AdminDashboard';
import AddModule from '../Admin/Pages/AddModule';
import AddQuestion from '../Admin/Pages/AddQuestion';
import AddQuestionModule from '../Admin/Pages/AddQuestionModule';

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
        <Route path="/admin" element={<AdminDashboard/>}>
          <Route path="add-module" element={<AddModule/>}/>
          <Route path="add-question" element={<AddQuestion/>}/>
          <Route path="add-question/:moduleId" element={<AddQuestionModule/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
