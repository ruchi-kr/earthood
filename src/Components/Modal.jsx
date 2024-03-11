import React,{useState} from 'react'
import { Form, Input } from 'antd';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
const Modal = () => {

    // // function for industry selection
    // const handleChangeIndustry = (value) => {
    //     console.log(`selected ${value}`);
    // };
    // const onSearchIndustry = (value) => {
    //     console.log('search:', value);
    // };
    // // Filter `option.label` match the user type `input`
    // const filterOptionIndustry = (input, option) =>
    //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const { TextArea } = Input;
    const [value, setValue] = useState()
    return (
        <div>
            {/* navbar */}

            {/* add modal */}
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add
                </button>
                <form >
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content ">
                                <div className="d-flex justify-content-between align-items-center m-3">
                                    <div>
                                        <h1 className="modal-title fs-5 text-capitalize textcolorblue" id="staticBackdropLabel">Add Client</h1>
                                        <p className='textlightgreen'>A small KYC of your client for healthy relationship!</p>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <p className='textcolorblue fw-bold'>Personal Details</p>
                                    <hr className='lightgreen' />
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Item label="Company Name" required tooltip="This is a required field">
                                                <Input type="text" className='borderlightgreen' placeholder="Company Name" variant="outlined" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-6">
                                            <Form.Item label="Email" required tooltip="This is a required field">
                                                <Input type="email" className='borderlightgreen' placeholder="you@example.com" variant="outlined" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Item label="Contact No." required tooltip="This is a required field">
                                                <Input type="tel" className='borderlightgreen' placeholder="Contact No." variant="outlined" />
                                                {/* <PhoneInput
                                                defaultCountry="IND"
                                                    placeholder="Contact No."
                                                    value={value}
                                                    onChange={setValue} /> */}
                                            </Form.Item>
                                        </div>

                                        {/* <div className="col-6">
                                            <Form.Item label="Country code" required tooltip="This is a required field">
                                                <Input type="number" className='borderlightgreen' placeholder="Country code" variant="outlined" />
                                            </Form.Item>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Form.Item label="Address" required tooltip="This is a required field">
                                                <TextArea className='borderlightgreen'
                                                    placeholder="Address"
                                                    autoSize={{ minRows: 2, maxRows: 6 }}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    {/* contact person detatils */}
                                    <p className='textcolorblue fw-bold'>Client Contact Person Details</p>
                                    <hr className='lightgreen' />
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Item label="Contact Person Name" required tooltip="This is a required field">
                                                <Input type="text" className='borderlightgreen' placeholder="Contact Person Name" variant="outlined" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-6">
                                            <Form.Item label="Contact Person Email" required tooltip="This is a required field">
                                                <Input type="email" className='borderlightgreen' placeholder="you@example.com" variant="outlined" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Item label="Contact No." required tooltip="This is a required field">
                                                <Input type="tel" className='borderlightgreen' placeholder="Contact No." variant="outlined" />
                                            </Form.Item>
                                        </div>
                                        {/* <div className="col-6">
                                            <Form.Item label="Country code" required tooltip="This is a required field">
                                                <Input type="number" className='borderlightgreen' placeholder="Country code" variant="outlined" />
                                            </Form.Item>
                                        </div>  */}
                                    </div>
                                </div>
                                {/* footer of modal */}
                                <div className=" d-flex justify-content-end m-3 gap-2">
                                    <button type="button" className="btn btn-outline-success textcolor " data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-success bg_green text-white">Add</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Modal
