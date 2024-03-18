import React,{ useState, useEffect } from 'react'
import '../index.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import CustomTable from './CustomTable'
import { Tabs} from 'antd';
import { dashboard_data_url, get_all_propoposal_url } from '../config'

import viewicon from '../Assets/viewicon.png';
// import groupicon from '../Assets/Group 4.png'
import {faFileSignature,faFileArrowUp,faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TabST = () => {
    const CONFIG_Token = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }   
  
    const [proposal_received_pt, setProposal_received_pt] = useState(0)
    const [proposal_sent_client, setProposal_sent_client] = useState(0)
    const [signed_contract, setSigned_contract] = useState(0)
  
    const [alldata, setAlldata] = useState([]);
    const [statuskey, setStatus] = useState(1);

    const allData = async () => {
        try {
          const tabstatus = {
            // eslint-disable-next-line no-use-before-define
            "status": statuskey
          }
          const response2 = await axios.post(`${get_all_propoposal_url}`,tabstatus, CONFIG_Token);
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
            setStatus(6)
            console.log("calling 1")
          }
          else if (id == 2) {
              setStatus(7)
          }
          else if (id == 3) {
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

    const fetchAllstDashData = async () => {
        try {
          const dashboarddata = await axios.get(`${dashboard_data_url}`, CONFIG_Token);
          setProposal_received_pt(dashboarddata.data.dashboard.status6)
          setProposal_sent_client(dashboarddata.data.dashboard.status7)
          setSigned_contract(dashboarddata.data.dashboard.status8)
        } catch (error) {
          toast.error(error.response.data.message)
        }
      }
      useEffect(function () {
        fetchAllstDashData()
      }, []);


const columnProposalReceivedPT = [
    {
        title: 'S.No',
        dataIndex: 'id',
        fixed: 'left',
        width: 80,
        render: (id, record, index) => { ++index; return index; },
    },
    {
        title: 'Proposal Recd.Date',
        dataIndex: 'created_at',
    },
    {
        title: 'EID',
        fixed: 'left',
        dataIndex: 'earthood_id',
    },
    {
        title: 'Project Name',
        render: (text, record) => {
            return (
                <span className='text-capitalize textcolor font14px fw-bold'>{record.project_name}</span>
            );
        }
    },
    {
        title: 'Client Name',
        render: (text, record) => {
            return (
                <span className='text-capitalize textcolor font14px fw-bold'>{record.client_name}</span>
            );
        }
    },
    {
        title: 'Sector',
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
        title: 'Contact Person',
        dataIndex: 'contact_person',
    },
    {
        title: 'Country',
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
        title: 'Action',
        dataIndex: '',
        key: 'x',
        fixed: 'right',
        render: () => <a className='d-flex'><img src={viewicon} alt="view icon" />&nbsp;<button className='btn btn-success'>Send</button></a>,
    },
];

const columnProposalSent = [
    {
        title: <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
        dataIndex: 'id',
        fixed: 'left',
        width: 80,
        render: (id, record, index) => { ++index; return index; },
    },
    {
        title:  <span className='text-capitalize textcolumntitle font14px fw-bold'>Submission Date</span>,
        dataIndex: 'submission_date',

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
        title: <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
        dataIndex: 'id',
        fixed: 'left',
        width: 80,
        render: (id, record, index) => { ++index; return index; },
    },
    {
        title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contract signing Date</span>,
        dataIndex: '',
    },
    {
        title: <span className='text-capitalize textcolumntitle font14px fw-bold'>uploading Date</span>,
        dataIndex: '',
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
          },
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
        <Tabs defaultActiveKey="1" centered
             onTabClick={handleStatus}
        >
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tabactivecolor tab_dashboard_size'>
                    <div>
                        <FontAwesomeIcon icon={faFileArrowDown}  size="2xl" className='iconcolor'/>
                        <p className='font14px textlightgreen mt-4'>Proposal received from Proposal Team</p>
                        <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_received_pt}</p>
                    </div>
                </div>
            } key={1}>

                <CustomTable columns={columnProposalReceivedPT} data={alldata}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tabactivecolor tab_dashboard_size'>
                    <FontAwesomeIcon icon={faFileArrowUp}  size="2xl" className='iconcolor' />
                    <p className='font14px textlightgreen mt-4'>Proposal sent to Client</p>
                    <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_sent_client}</p>

                </div>
            } key={2} >

                <CustomTable columns={columnProposalSent} data={alldata}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tabactivecolor tab_dashboard_size'>
                     <FontAwesomeIcon icon={faFileSignature}  size="2xl" className='iconcolor'/>
                    <p className='font14px textlightgreen text-capitalize mt-4'>signed contract</p>
                    <p className='textcolorblue' style={{ fontSize: '35px' }}>{signed_contract}</p>
                </div>
            } key={3} >

                <CustomTable columns={columnSignedContract} data={alldata} />
            </Tabs.TabPane>
        </Tabs>
       
    </>
)
}

export default TabST
