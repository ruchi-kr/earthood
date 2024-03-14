import React from 'react'
import { Tabs } from 'antd'

const AddProject = () => {
    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-center textcolorblue fw-bolder p-2 text-capitalize bg-light'>project detatils</h2>
                        <Tabs defaultActiveKey="1" centered
                            indicator={{ Backgroundcolor: '#07B6AF' }}
                            size='large'
                        >
                            <Tabs.items tab={
                                <div className='border-0 shadow-lg textlightgreen rounded-0 px-5 py-2 text-center'>
                                    <p>Project Details</p>
                                </div>
                            } key="1">
                                {/* tab 1 project info form */}
                                <div className='col-10 border-0 bg-white shadow-sm p-5 mx-auto'>
                                    {/* row 1 */}
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <label for="projectname" className="form-label">Project Name*</label>
                                            <input type="text" className="form-control borderlightgreen" id="projectname" placeholder="Project Name" required />
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="eid" className="form-label">Earthood Id*</label>
                                            <input type="text" className="form-control borderlightgreen" id="eid" placeholder="Earthood Id" required />
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="clientname" className="form-label">Client Name*</label>
                                            <input type="text" className="form-control borderlightgreen" id="clientname" placeholder="Client Name" required />
                                        </div>
                                    </div>
                                    {/* row 2 */}
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <label htmlFor="country" className="form-label" required>Country*</label>
                                            {/* <Input value={country} onChange={(e) => setCountry(e.target.value)} type="text" id="country" className='borderlightgreen' placeholder="Country" variant="outlined" required /> */}
                                            {/* value={country} onChange={(e) => setCountry(e.target.value)} */}
                                            <select id="country" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" >
                                                <option selected>Country</option>
                                                <option value={1}>One</option>
                                            </select>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="Program" className="form-label">Program*</label>
                                            <input type="text" className="form-control borderlightgreen" id="Program" placeholder="Program" required />
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="Program Id" className="form-label">Program Id*</label>
                                            <input type="text" className="form-control borderlightgreen" id="Program Id" placeholder="Program Id" required />
                                        </div>
                                    </div>
                                    {/* row 3 */}
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <label for="Implementation Fees" className="form-label">Implementation Fees*</label>
                                            <input type="number" className="form-control borderlightgreen" id="Implementation Fees" placeholder="Implementation Fees" required />
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="Proposal Date" className="form-label">Proposal Date*</label>
                                            <input type="date" className="form-control borderlightgreen" id="Proposal Date" required />
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="Scope" className="form-label">Scope*</label>
                                            <select id="Scope" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" >
                                                <option selected>Scope</option>
                                                <option value={1}>One</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* row 4 */}
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <label for="Scope(PO/POA)" className="form-label">Scope(PO/POA)*</label>
                                            <select id="Scope(PO/POA)" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" >
                                                <option selected>Scope(PO/POA)</option>
                                                <option value={1}>One</option>
                                            </select>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <label for="Sectoral Scope" className="form-label">Sectoral Scope*</label>
                                            <select id="Sectoral Scope" className="form-select borderlightgreen form-select-sm" aria-label="Default select example" >
                                                <option selected>Sectoral Scope</option>
                                                <option value={1}>One</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* row 5 */}
                                    <p className='textlightgreen fw-bold m-3'>Assessment Team</p>
                                    <hr />
                                    <div className="row">

                                    </div>
                                </div>
                            </Tabs.items>
                            <Tabs.items tab={
                                <div className='border-0 shadow-lg textlightgreen rounded-0 px-5 py-2 text-center'>
                                    <p>Attachment</p>
                                </div>
                            } key="2">
                                {/* tab 2 project attachment form */}
                                <div className='col-10 border-0 bg-white shadow-sm p-5 mx-auto'>
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <label for="attachment" className="form-label">Attachment*</label>
                                            <input type="file" className="form-control borderlightgreen" id="attachment" placeholder="Attachment" required />
                                        </div>
                                    </div>
                                </div>
                            </Tabs.items>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProject
