import './App.css';
import Login from './Pages/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import OtpPage from './Pages/OtpPage'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/otppage" element={<OtpPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
