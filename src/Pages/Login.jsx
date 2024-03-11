import React, { useState } from 'react'
import axios from 'axios'
import logo from '../Assets/logo.png'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { pt_login_url } from '../config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user_id, setUser_id] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const loggingin = (event) => {
        event.preventDefault();
        const requestData = { user_id, password }
        axios.post(`${pt_login_url}`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    sessionStorage.setItem("token", result.data.token);
                    toast.success('User Logged In Successfully!');
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Invaid credentials");
            })
    }
    return (
        <>
            <div className="container-fluid" style={{ height: '100vh' }}>
                <div className="row h-100">
                    <div className="col-6 bg_green">
                        <img src="" alt="" />
                    </div>
                    <div className='col-6 boxwidth mx-auto my-auto'>
                        <img className='mb-5' width='165px' height='29px' src={logo} alt="earthoodlogo" />
                        <p style={{ fontSize: '50px', fontWeight: '700', lineHeight: '60.51px' }}><span className='textcolorblue'>Welcome back to</span><br /><span className='textcolor'>Earthood</span></p>
                        <p className='textgrey'>Sign in to your account</p>
                        <form onSubmit={(e) => { loggingin(e) }}>
                            {/* <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label textcolorblue">Username</label>
                            {/* <input type="email" placeholder="youremail@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                            {/* <Input value={user_id} onChange={(e) => setUser_id(e.target.value)} type="text" placeholder="username" />
                    </div> */}
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label textcolorblue">Username</label>
                                <Input value={user_id} onChange={(e) => setUser_id(e.target.value)} className="form-control" type="text" placeholder="username" id='exampleInput' aria-label="default input example" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password1" className="form-label textcolorblue">Password</label>
                                {/* <input type="password" placeholder="Enter your Password" className="form-control" id="exampleInputPassword1" /> */}
                                <Input.Password
                                type='password'
                                    id='Password1'
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label textgrey" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <Link to="/forgotpassword" className="textcolor text-end text-decoration-underline">Forgot Password?</Link>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-success border-0 bg_green text-white" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        </>
    )
}

export default Login
