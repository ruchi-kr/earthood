import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='col-3'>
          <img className='d-flex justify-content-center' width='165px' height='29px' src="../assets/logo.png" alt="earthoodlogo" />
          <p className='text-center' style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Recover your</span><br /><span className='textcolor'>account</span></p>
          <p className='textgrey text-center'>Upon entering the registered email address you will receive an OTP to recover your account.</p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label textcolorblue">Email</label>
            <input type="email" placeholder="youremail@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="d-grid">
            <Link to='/otppage' className="btn btn-success border-0 bg_green text-white" type="button">Send OTP</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
