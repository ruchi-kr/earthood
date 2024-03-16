import './App.css';
import './Assets/logo.png'
import Login from './Pages/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import PTdashboard from './Pages/PTdashboard';
import STdashboard from './Pages/STdashboard';
import TMdashboard from './Pages/TMdashboard';
import AddProject from './Pages/AddProject';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

          <Route path="/projects" element={<AddProject />}></Route>
          {/*
          <Route path="/invoice" element={}></Route>
          <Route path="/clients" element={}></Route>
          */}
          <Route path='/dashboard' element={<PTdashboard />}></Route>
          <Route path='/stdashboard' element={<STdashboard />}></Route>
          <Route path='/tmdashboard' element={<TMdashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
