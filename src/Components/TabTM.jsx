import React, { useState, useEffect } from 'react'
import '../index.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import CustomTable from './CustomTable'
import { Tabs } from 'antd';
import viewicon from '../Assets/viewicon.png';
import { dashboard_data_url } from '../config';
import { get_all_propoposal_url } from '../config';
// import groupicon from '../Assets/Group 4.png'
import { faFileSignature, faFileArrowDown, faFileCircleCheck, faFileCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TabTM = () => {
    const CONFIG_Token = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }

    const [proposal_received_pt, setProposal_received_pt] = useState(0)
    const [proposal_sent_clarify, setProposal_sent_clarify] = useState(0)
    const [approved_proposal, setApproved_proposal] = useState(0)
    const [signed_contract, setSigned_contract] = useState(0)

    const [alldata, setAlldata] = useState([]);


    // const navigate = useNavigate();
    const [statuskey, setStatus] = useState(1);

    const allData = async () => {
        try {
            const tabstatus = {
                // eslint-disable-next-line no-use-before-define
                "status": statuskey
            }
            const response2 = await axios.post(`${get_all_propoposal_url}`, tabstatus, CONFIG_Token);
            setAlldata(response2.data.data);
        }
        catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
    const handleStatus = async (id) => {
        console.log("handle status", id);
        try {
            console.log(id)
            if (id == 1) {
                setStatus(1)
                console.log("calling 3")
            }
            else if (id == 2) {
                setStatus(3)
            }
            else if (id == 3) {
                setStatus(5)
            }
            else if (id == 4) {
                setStatus(8)
            }
        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        console.log("useEffect triggered with status:", statuskey);
        allData();
    }, [statuskey]);
    const fetchAlltmDashData = async () => {
        try {
            const dashboarddata = await axios.get(`${dashboard_data_url}`, CONFIG_Token);
            setProposal_received_pt(dashboarddata.data.dashboard.status1)
            setProposal_sent_clarify(dashboarddata.data.dashboard.status3)
            setApproved_proposal(dashboarddata.data.dashboard.status5)
            setSigned_contract(dashboarddata.data.dashboard.status8)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(function () {
        fetchAlltmDashData()
    }, [])

    const columnProposalReceivedPT = [
        {
            title:<span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
            dataIndex: 'id',
            fixed: 'left',
            width: 80,
            render: (id, record, index) => { ++index; return index; },
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Proposal Recd.Date</span>,
            dataIndex: 'created_at',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>EID</span>,
            fixed: 'left',
            dataIndex: 'earthood_id',
        },
        {
            title:<span className='text-capitalize textcolumntitle font14px fw-bold'>Project Name</span>,
            render: (text, record) => {
                return (
                    <span className='text-capitalize textcolor font14px fw-bold'>{record.project_name}</span>
                );
            }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Client Name</span>,
            render: (text, record) => {
                return (
                  <span className='text-capitalize textcolor font14px fw-bold'>{record.client_name}</span>
                );
              }
        },
        {
            title:  <span className='text-capitalize textcolumntitle font14px fw-bold'>Sector</span>,
            render: (text, record) => {
                if (record.sector) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.sector}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contact Person</span>,
            dataIndex: 'contact_person',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Country</span>,
            render: (text, record) => {
                if (record.country) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.country}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Action</span>,
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            render: () => <a>
                <div className="dropdown-center dropend">
                    <button className="btn btn-sm btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>
                    <ul className="dropdown-menu z-3 position-absolute">
                        <li><a className="dropdown-item" href="#">Clarification Required</a></li>
                        <li><a className="dropdown-item" href="#">Approve</a></li>
                    </ul>
                </div>
            </a>,
        },
    ];

    const columnApprovedProposal = [
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
            dataIndex: 'id',
            fixed: 'left',
            width: 80,
            render: (id, record, index) => { ++index; return index; },
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Proposal Recd.Date</span>,
            dataIndex: 'created_at',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Action taken Date</span>,
            dataIndex: 'updated_at',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>EID</span>,
            dataIndex: 'earthood_id',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Project Name</span>,
            render: (text, record) => {
                return (
                    <span className='text-capitalize textcolor font14px fw-bold'>{record.project_name}</span>
                );
            }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Client Name</span>,
            render: (text, record) => {
                return (
                    <span className='text-capitalize textcolor font14px fw-bold'>{record.client_name}</span>
                );
            }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Sector</span>,
            render: (text, record) => {
                if (record.sector) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.sector}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contact Person</span>,
            dataIndex: 'contact_person',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Country</span>,
            render: (text, record) => {
                if (record.country) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.country}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Action</span>,
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            width: 130,
            render: () => <a><img src={viewicon} alt="view icon" />&nbsp;</a>,
        },
    ];

    const columnSignedContract = [
        {
            title:  <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
            dataIndex: 'id',
            fixed: 'left',
            width: 80,
            render: (id, record, index) => { ++index; return index; },
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Proposal Recd.Date</span>,
            dataIndex: 'created_at',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>EID</span>,
            dataIndex: 'earthood_id',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Project Name</span>,
            render: (text, record) => {
                return (
                    <span className='text-capitalize textcolor font14px fw-bold'>{record.project_name}</span>
                );
            }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Client Name</span>,
            render: (text, record) => {
                return (
                    <span className='text-capitalize textcolor font14px fw-bold'>{record.client_name}</span>
                );
            }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Sector</span>,
            render: (text, record) => {
                if (record.sector) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.sector}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contact Person</span>,
            dataIndex: 'contact_person',
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Country</span>,
            render: (text, record) => {
                if (record.country) {
                  return (
                    <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen'>
                      {record.country}
                    </span>
                  );
                } else {
                  return null; // If no country, return nothing
                }
              }
        },
        {
            title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Action</span>,
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            width: 130,
            render: () => <a><img src={viewicon} alt="view icon" />&nbsp;</a>,
        },
    ];

    return (
        <>
            <div className="container-fluid">
                <Tabs defaultActiveKey="1" centered
                    onTabClick={handleStatus}
                >
                    <Tabs.TabPane tab={
                        <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tabactivecolor  tab_dashboard_size'>
                            <FontAwesomeIcon icon={faFileArrowDown} size="2xl" className='iconcolor' />
                            <p className='font14px textlightgreen text-capitalize mt-4'>proposal received from PT</p>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_received_pt}</p>
                        </div>
                    } key={1}>

                        <CustomTable columns={columnProposalReceivedPT} data={alldata} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tabactivecolor  tab_dashboard_size'>
                            <FontAwesomeIcon icon={faFileCircleQuestion} size="2xl" className='iconcolor' />
                            <p className='font14px textlightgreen text-capitalize mt-4'>proposal sent for clarification</p>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_sent_clarify}</p>

                        </div>
                    } key={2} >

                        <CustomTable columns={columnApprovedProposal} data={alldata} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tabactivecolor tab_dashboard_size'>
                            <FontAwesomeIcon icon={faFileCircleCheck} size="2xl" className='iconcolor' />
                            <p className='font14px textlightgreen text-capitalize mt-4'>approved proposal</p>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>{approved_proposal}</p>
                        </div>
                    } key={3} >

                        <CustomTable columns={columnApprovedProposal} data={alldata} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                        <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tabactivecolor tab_dashboard_size'>
                            <FontAwesomeIcon icon={faFileSignature} size="2xl" className='iconcolor' />
                            <p className='font14px textlightgreen text-capitalize mt-4'>signed contract</p>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>{signed_contract}</p>
                        </div>
                    } key={4} >

                        <CustomTable columns={columnSignedContract} data={alldata} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default TabTM
