import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import CustomTable from './CustomTable'
import { Tabs} from 'antd';
import { dashboard_data_url } from '../config'
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
  
    const fetchAlltmDashData = async () => {
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
        fetchAlltmDashData()
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
        dataIndex: '',
    },
    {
        title: 'EID',
        fixed: 'left',
        dataIndex: 'earthood_id',
    },
    {
        title: 'Project Name',
        dataIndex: 'project_name',
    },
    {
        title: 'Client Name',
        dataIndex: 'client_name',
    },
    {
        title: 'Sector',
        dataIndex: 'sector',
    },
    {
        title: 'Contact Person',
        dataIndex: 'contact_person',
    },
    {
        title: 'Country',
        dataIndex: 'country',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        fixed: 'right',
        width: 130,
        render: () => <a><img src={viewicon} alt="view icon" />&nbsp;<button className='btn btn-success'>Send</button></a>,
    },
];

const columnProposalSent = [
    {
        title: 'S.No',
        dataIndex: 'id',
        fixed: 'left',
        width: 80,
        render: (id, record, index) => { ++index; return index; },
    },
    {
        title: 'Submission Date',
        dataIndex: 'submission_date',

    },
    {
        title: 'EID',
        dataIndex: 'earthood_id',
    },
    {
        title: 'Project Name',
        dataIndex: 'project_name',
    },
    {
        title: 'Client Name',
        dataIndex: 'client_name',
    },
    {
        title: 'Sector',
        dataIndex: 'sector',
    },
    {
        title: 'Contact Person',
        dataIndex: 'contact_person',
    },
    {
        title: 'Country',
        dataIndex: 'country',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        fixed: 'right',
        width: 130,
        render: () => <a><img src={viewicon} alt="view icon" />&nbsp;</a>,
    },
];

const columnSignedContract = [
    {
        title: 'S.No',
        dataIndex: 'id',
        fixed: 'left',
        width: 80,
        render: (id, record, index) => { ++index; return index; },
    },
    {
        title: 'Contract Signing Date',
        dataIndex: '',
    },
    {
        title: 'Uploading Date',
        dataIndex: '',
    },
    {
        title: 'EID',
        dataIndex: 'earthood_id',
    },
    {
        title: 'Project Name',
        dataIndex: 'project_name',
    },
    {
        title: 'Client Name',
        dataIndex: 'client_name',
    },
    {
        title: 'Sector',
        dataIndex: 'sector',
    },
    {
        title: 'Contact Person',
        dataIndex: 'contact_person',
    },
    {
        title: 'Country',
        dataIndex: 'country',
    },
    {
        title: 'Action',
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
            indicator={{ Backgroundcolor: '#07B6AF' }}
        >
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tab_dashboard_size'>
                    <div>
                        <FontAwesomeIcon icon={faFileArrowDown}  size="2xl" className='iconcolor'/>
                        <p className='font14px textlightgreen mt-4'>Proposal received from Proposal Team</p>
                        <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_received_pt}</p>
                    </div>
                   {/* <FontAwesomeIcon icon={faFileArrowDown}  size="2xl" className='iconcolor'/>
                    <p className='font14px textlightgreen text-capitalize'>proposal received from PT</p>
                    <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p> */}
                </div>
            } key={1}>

                <CustomTable columns={columnProposalReceivedPT}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tab_dashboard_size'>
                    <FontAwesomeIcon icon={faFileArrowUp}  size="2xl" className='iconcolor' />
                    <p className='font14px textlightgreen mt-4'>Proposal sent to Client</p>
                    <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_sent_client}</p>

                </div>
            } key={2} >

                <CustomTable columns={columnProposalSent}/>
            </Tabs.TabPane>
            <Tabs.TabPane tab={
                <div className='border-1 borderlightgreen bg-white rounded-2 p-2 text-center tab_dashboard_size'>
                     <FontAwesomeIcon icon={faFileSignature}  size="2xl" className='iconcolor'/>
                    <p className='font14px textlightgreen text-capitalize mt-4'>signed contract</p>
                    <p className='textcolorblue' style={{ fontSize: '35px' }}>{signed_contract}</p>
                </div>
            } key={3} >

                <CustomTable columns={columnSignedContract} />
            </Tabs.TabPane>
        </Tabs>
       
    </>
)
}

export default TabST
