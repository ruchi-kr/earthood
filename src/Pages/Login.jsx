import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="container-fluid" style={{ height: '100vh' }}>
                <div className="row h-100">
                    <div className="col-6 bg_green">
                        <img src="" alt="" />
                    </div>
                    <div className='col-6 boxwidth'>
                        <img width='165px' height='29px' src="../assets/logo.png" alt="earthoodlogo" />
                        <p style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Welcome back to</span><br /><span className='textcolor'>Earthood</span></p>
                        <p className='textgrey'>Sign in to your account</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label textcolorblue">Email</label>
                            <input type="email" placeholder="youremail@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label textcolorblue">Password</label>
                            <input type="password" placeholder="Enter your Password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label textgrey" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <Link to="/forgotpassword" className="textcolor text-end text-decoration-underline">Forgot Password?</Link>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-success border-0 bg_green text-white" type="button">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
