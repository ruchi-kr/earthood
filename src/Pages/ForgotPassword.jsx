import logo from '../Assets/logo.png'
import React, { useState } from 'react'
import axios from 'axios'
import { pt_forgotpassword_verify_url, pt_forgotpassword_url } from '../config';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [user_id, setUser_id] = useState("")
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [otp, setOtp] = useState("");
  // otp send
  const sendOtp = (event) => {
    event.preventDefault();
    const requestData = { user_id }

    axios.post(`${pt_forgotpassword_url}`, requestData)
      .then((result) => {
        if (result.status === 200) {
          toast.success('Mail Sent Successfully!');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      })
  }
  // otp verify
  const Otpverify = (event) => {
    event.preventDefault();
    const requestData = { user_id, newpassword, confirmpassword, otp }
    axios.post(`${pt_forgotpassword_verify_url}`, requestData)
      .then((result) => {
        if (result.status === 200) {
          toast.success('password reset Successfully!');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      })
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='col-3'>
          <div className="d-flex justify-content-center">
            <img className='mb-5' width='165px' height='29px' src={logo} alt="earthoodlogo" />
          </div>
          <p className='text-center' style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Recover your</span><br /><span className='textcolor'>account</span></p>
          <p className='textgrey text-center'>Upon entering the registered email address you will receive an OTP to recover your account.</p>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label textcolorblue">Username</label>
            <Input value={user_id} onChange={(e) => setUser_id(e.target.value)} className="form-control" type="text" placeholder="username" id='exampleInput' aria-label="default input example" />
          </div>
          <div className="d-grid">
            {/* pop up modal for send otp */}
            <button onClick={(e) => { sendOtp(e) }} type="button" className="btn btn-success border-0 bg_green text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Send OTP
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="d-flex justify-content-end align-items-center m-3">
                    <button type="button" className="btn-close flex-end" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-center">
                      <img className='mb-5' width='165px' height='29px' src={logo} alt="earthoodlogo" />
                    </div>
                    <p className='text-center' style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Recover your</span><br /><span className='textcolor'>account</span></p>
                    <p className='textgrey text-center'>Upon entering the registered email address you will receive an OTP to recover your account.</p>
                    <div className="mb-3">
                      <label htmlFor="Password3" className="form-label textcolorblue">New Password</label>
                      <Input.Password
                        type='password'
                        id='Password3'
                        value={newpassword} onChange={(e) => setNewpassword(e.target.value)}
                        placeholder="password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Password4" className=" textcolorblue">Confirm Password</label>
                      <Input
                        type='password'
                        id='Password4'
                        value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}
                        placeholder="password"
                      // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                    </div>
                    {/* <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                    ><br />
                      <Input.Password type="password" placeholder="New password" value={newpassword} onChange={(e) => setNewpassword(e.target.value)}/>
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password type="password" placeholder="confirm password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}/>
                    </Form.Item> */}
                    <div className="mb-3">
                      <label htmlFor="exampleInput2" className="form-label textcolorblue">Enter 4 Digit Code</label>
                      <input value={otp} onChange={(e) => setOtp(e.target.value)} type="number" className="form-control" id="exampleInput2" />
                    </div>
                  </div>
                  <div className="d-grid mx-3">
                    <button onClick={(e) => { Otpverify(e) }} type="button" className="btn btn-success border-0 bg_green text-white mb-4">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default ForgotPassword
