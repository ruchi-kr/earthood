import './App.css';
import './Assets/logo.png'
import Login from './Pages/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import PTdashboard from './Pages/PTdashboard';
import AddProject from './Pages/AddProject';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/projects" element={<AddProject />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path='/dashboard' element={<PTdashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
