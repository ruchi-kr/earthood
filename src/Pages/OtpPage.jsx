import React from 'react'

const OtpPage = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='col-3'>
          <img className='text-center' width='165px' height='29px' src="../assets/logo.png" alt="earthoodlogo" />
          <p className='text-center' style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Recover your</span><br /><span className='textcolor'>account</span></p>
          <p className='textgrey text-center'>Upon entering the registered email address you will receive an OTP to recover your account.</p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label textcolorblue">Enter 4 Digit Code</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="d-grid">
            <button to='/otppage' className="btn btn-success border-0 bg_green text-white" type="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpPage
