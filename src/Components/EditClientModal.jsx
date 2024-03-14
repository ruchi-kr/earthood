import React, { useState } from 'react'
import { Input } from 'antd';
import axios from 'axios'
import { add_client_url } from '../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
const Modal = () => {
    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }
    const { TextArea } = Input;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile_number] = useState('');
    const [contact_person, setContact_person] = useState('');
    const [contact_email, setContact_email] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [contact_mobile, setContact_mobile] = useState('');

    const navigate = useNavigate();
    const saveclient = (event) => {
        event.preventDefault();
        const requestData = { name, email, mobile_number, contact_person, contact_email, country, address, contact_mobile }
        axios.post(`${add_client_url}`, requestData, CONFIG_Token)
            .then((result) => {
                if (result.status===200) {
                    toast.success('Client Added Successfully!');
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            })
    }
    return (
        <div>
            {/* add modal */}
            <div>
                <button className='btn border-0 btn-success text-white bg_green' style={{ fontSize: '14px' }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Client</button>
                <form onSubmit={(e) => { saveclient(e) }} >
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content p-3">
                                <div className="d-flex justify-content-between align-items-center m-3">
                                    <div>
                                        <h1 className="modal-title fs-5 text-capitalize textcolorblue" id="staticBackdropLabel">Edit Client</h1>
                                        <p className='textlightgreen mt-2'>A small KYC of your client for healthy relationship!</p>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <p className='textcolorblue fw-bold'>Organisation Details</p>
                                    <hr className='lightgreen' />
                                    <div className="row">
                                        <div className="mb-3 col-6">
                                            <label htmlFor="companyname" className="form-label">Company Name*</label>
                                            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} id="companyname" className='borderlightgreen' placeholder="Company Name" variant="outlined" required />
                                        </div>

                                        <div className="mb-3 col-6">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Company Email address*</label>
                                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleFormControlInput1" className='borderlightgreen' placeholder="you@example.com" variant="outlined" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="contactno" className="form-label">Contact No.*</label>
                                            <PhoneInput defaultCountry='india' type="tel" value={mobile_number} onChange={(e) => setMobile_number(e.target.value)} id="contactno" className='borderlightgreen rounded-1' placeholder="Contact No." variant="outlined" required />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="country" className="form-label" required>Country*</label>
                                            {/* <Input value={country} onChange={(e) => setCountry(e.target.value)} type="text" id="country" className='borderlightgreen' placeholder="Country" variant="outlined" required /> */}
                                            <select className="form-select borderlightgreen form-select-sm" aria-label="Default select example" value={country} onChange={(e) => setCountry(e.target.value)}>
                                                <option selected>Country</option>
                                                <option value={1}>One</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label htmlFor="address" className="form-label" required>Address</label>
                                            <TextArea value={address} onChange={(e) => setAddress(e.target.value)} id="address" className='borderlightgreen'
                                                placeholder="Address"
                                                autoSize={{ minRows: 2, maxRows: 6 }}
                                                required />
                                        </div>
                                    </div>
                                    {/* contact person detatils */}
                                    <p className='textcolorblue fw-bold mt-5'>Client Contact Person Details</p>
                                    <hr className='lightgreen' />
                                    <div className="row">
                                        <div className="mb-3 col-6">
                                            <label htmlFor="contactPersonName">Contact Person Name*</label>
                                            <Input value={contact_person} onChange={(e) => setContact_person(e.target.value)} type="text" id="contactPersonName" className='borderlightgreen' placeholder="Contact Person Name" variant="outlined" required />
                                        </div>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="contactPersonEmail">Contact Person Email*</label>
                                            <Input value={contact_email} onChange={(e) => setContact_email(e.target.value)} type="email" id="contactPersonEmail" className='borderlightgreen' placeholder="you@example.com" variant="outlined" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-6">
                                            <label htmlFor="contactmobileno">Contact No.*</label>
                                            <PhoneInput defaultCountry='india' inputProps={{required:true}} value={contact_mobile} onChange={(e) => setContact_mobile(e.target.value)} type="tel" className='borderlightgreen rounded-1' id="contactmobileno" placeholder="Contact No." variant="outlined" required />
                                        </div>
                                    </div>
                                </div>
                                {/* footer of modal */}
                                <div className=" d-flex justify-content-end m-3 gap-2">
                                    <button type="button" className="btn btn-outline-success textcolor " data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-success bg_green text-white">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >

        </div >
    )
}

export default Modal
