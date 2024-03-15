import React, { useState,useEffect } from 'react'
import { Input } from 'antd';
import axios from 'axios'
import { add_client_url } from '../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { get_country_list_url } from '../config'
import editicon from '../Assets/editicon.png';
import { dashboard_data_url } from '../config'
import { get_all_clients_url, get_all_propoposal_url } from '../config';

const EditClientModal = ({clientId}) => {

    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }


    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [client_id, setClient_id]= useState(0)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobile_number] = useState(0);
    const [contact_person, setContact_person] = useState('');
    const [contact_email, setContact_email] = useState('');
    const [country, setOurCountry] = useState('');
    const [country_list, setOurCountryList] = useState([]);
    const [address, setAddress] = useState('');
    const [contact_mobile, setContact_mobile] = useState('');

    const navigate = useNavigate();
    // const handleOpen = () => {
    //     console.log("name data",name);
    //     // setOpen(true);
    //     setName(name);
    //     // console.log("rowdata:", data);
    //     // setEmail(rowData.email);
    //     // setMobile_number(rowData.mobile_number);
    //     // setContact_person(rowData.contact_person);
    //     // setContact_email(rowData.contact_email);
    //     // setOurCountry(rowData.country);
    //     // setOurCountryList(rowData.country_list);
    //     // setAddress(rowData.address);
    //     // setContact_mobile(rowData.contact_mobile);
    //     // setClient_id(rowData.id);
    //   };

      const handleOpen = async () => {
         try {
            console.log("Hello", clientId);
            const response = await axios.get(`${get_all_clients_url}`, CONFIG_Token);
            const clientData= response.data.data.filter((client) => client.id === clientId);
            console.log("Razzzzzzzz", clientData[0]);
        
            setName(clientData[0].name);
            // console.log("name",clientData[0].name);
    
            console.log("setName", name);
            setEmail(clientData[0].email);
            setMobile_number(clientData[0].mobile_number);
            setContact_person(clientData[0].contact_person);
            setContact_email(clientData[0].contact_email);
            // setOurCountry(clientData[0].country);
            setAddress(clientData[0].address);
            setContact_mobile(clientData[0].contact_mobile);
            setClient_id(clientData[0].id);
         } catch (error) {
            console.log(error)
            
         }
    };

    // useEffect(() => {
    //     console.log("name", name);
    //   }, [name]);
      
    
    // const handleClose = () => {
    //     setOpen(false);
    //   };
    
      const handleEdit = async (data)=> {
        console.log("rowdata:", data);
        // event.preventDefault();
           
        const requestData = { name, email, mobile_number, contact_person, contact_email, country, address, contact_mobile }
        axios.post(`${add_client_url}/${client_id}`, requestData, CONFIG_Token)
            .then((result) => {
                if (result.status===200 && result.data.status===true) {
                    toast.success('Client Updated Successfully!');
                    navigate('/dashboard')
                    setAddress('');
                    setName('');
                    setEmail('');
                    setMobile_number('');
                    setContact_person('');
                    setContact_email('');
                    setOurCountry('');
                    setContact_mobile('');
                }
                else{
                    toast.error(result.data.message);
                }
               
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            })
    }
    const fetchcountrylist = async () => {
        try {
            const countrylist = await axios.get(`${get_country_list_url}`, CONFIG_Token)
            console.log("country list",countrylist.data)
            setOurCountryList(countrylist.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(function () {
        fetchcountrylist()
    },[]);
    return (
        <div>

            {/* edit client modal */}
            <div>
            <button onClick={handleOpen} type="button" className='btn border-0' style={{ fontSize: '14px' }} data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={editicon} alt="edit icon"/></button>
                <form >
                    <div className="modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content p-3">
                                <div className="d-flex justify-content-between align-items-center m-3">
                                    <div>
                                        <h1 className="modal-title fs-5 text-capitalize textcolorblue" id="exampleModalLabel">Edit Client</h1>                                       
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
                                            <PhoneInput Country='US' type="tel" value={mobile_number} onChange={setMobile_number} id="contactno" className='borderlightgreen rounded-1' placeholder="Contact No." variant="outlined" required />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="country" className="form-label" required>Country*</label>
                                            <select className="form-select borderlightgreen form-select-sm" aria-label="Default select example" value={country} onChange={(e) => setOurCountry(e.target.value)}>
                                                <option selected>Country</option>
                                                {
                                                    country_list.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }                                         
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
                                            <PhoneInput Country='US' inputProps={{ required: true }} value={contact_mobile} onChange={setContact_mobile} type="tel" className='borderlightgreen rounded-1' id="contactmobileno" placeholder="Contact No." variant="outlined" required />
                                        </div>
                                    </div>
                                </div>
                                {/* footer of modal */}
                                <div className=" d-flex justify-content-end m-3 gap-2">
                                    <button type="button" className="btn btn-outline-success textcolor " data-bs-dismiss="modal">Discard</button>
                                    <button type="button" onClick={handleEdit} className="btn btn-success bg_green text-white">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div>

        </div>
    )
}

export default EditClientModal