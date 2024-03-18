import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getClientDetails } from '../config';

function ViewClient() {

    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile_number] = useState(0);
    const [contact_person, setContact_person] = useState('');
    const [contact_email, setContact_email] = useState('');
    const [country, setOurCountry] = useState('');
    const [address, setAddress] = useState('');
    const [contact_mobile, setContact_mobile] = useState('');

    const displayClientDetails = async () => {
        try {
           const payload = {
               "client_id": clientId
           }
           const response = await axios.post(`${getClientDetails}`,payload, CONFIG_Token);
           const clientData=response.data.data;
        
           setName(clientData.name);   
           setEmail(clientData.email);
           setMobile_number(clientData.mobile_number);
           setContact_person(clientData.contact_person);
           setContact_email(clientData.contact_email);
           setAddress(clientData.address);
           setContact_mobile(clientData.contact_mobile);
           setClient_id(clientData.id);
           setOurCountry(clientData.country);
        } catch (error) {
           console.log(error)           
        }
   };

   useEffect(() => {
       displayClientDetails();
   },[]);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h5 className='textcolorblue'>View Client</h5>
                        <p className='textcolorblue font20px fw-bold'>Organisation Details</p>
                        <hr className='lightgreen' />
                        <div className="row">
                            <div className="mb-3 col-6">
                                <p className="textcolorblue font14px">Company Name*</p>
                                <p className="textlightgreen font16px">{name}</p>
                            </div>

                            <div className="mb-3 col-6">
                                <p className="textcolorblue font14px">Company Email address*</p>
                                <p className="textlightgreen font16px">{email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <p className="textcolorblue font14px">Contact No.*</p>
                                <p className="textlightgreen font16px">{mobile_number}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="textcolorblue font14px">Country*</p>
                                <p className="textlightgreen font16px">{country}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <p className="textcolorblue font14px">Address</p>
                                <p className="textlightgreen font16px">{address}</p>
                            </div>
                        </div>
                        {/* contact person detatils */}
                        <p className='textcolorblue fw-bold font20px mt-5'>Client Contact Person Details</p>
                        <hr className='lightgreen' />
                        <div className="row">
                            <div className="mb-3 col-6">
                                <p className="textcolorblue font14px">Contact Person Name*</p>
                                <p className="textlightgreen font16px">{contact_person}</p>
                            </div>
                            <div className="mb-3 col-6">
                                <p className="textcolorblue font14px">Contact Person Email*</p>
                                <p className="textlightgreen font16px">{contact_email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-6">
                                <p className="textcolorblue font14px">Contact No.*</p>
                                <p className="textlightgreen font16px">{contact_mobile}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ViewClient