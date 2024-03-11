import './App.css';
import './Assets/logo.png'
import Login from './Pages/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import PTdashboard from './Pages/PTdashboard';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path='/dashboard' element={<PTdashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
