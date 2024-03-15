import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
// pages
import CustomTable from './CustomTable'
import EditClientModal from './EditClientModal'
// ant design components
import { Tabs, Table } from 'antd'

// api for fetching data
import { dashboard_data_url } from '../config'
// figma design icons
import viewicon from '../Assets/viewicon.png';
import editicon from '../Assets/editicon.png';
// import vectorarrow from '../Assets/Vectorarrow.png'
import groupicon from '../Assets/Group 4.png'
// api for fetching data
import { get_all_clients_url, get_all_propoposal_url } from '../config';

const Tab = () => {
  const CONFIG_Token = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  }
  const [alldata, setAlldata] = useState([]);
  const [proposal_verify, setProposal_verify] = useState([]);
  // const [statuschange, setStatuschange] =useState(1)
 
  // const handleStatus = () => {
  //   if(key===2){
  //     setStatuschange(3);
  //   }
  //   else if(key===6){
  //     setStatuschange(6);
  //   }
  //   else{
  //     setStatuschange(1);
  //   }
  // }
  const allData = async () => {
    try {
      const response = await axios.get(`${get_all_clients_url}`, CONFIG_Token);
      setAlldata(response.data.data);
      console.log("my total client data", response.data.data)

      const status = {
        "status": 1
      }
      
      const response2 = await axios.post(`${get_all_propoposal_url}`, status, CONFIG_Token);     
      setProposal_verify(response2.data.data);
      console.log("my proposal data", response2.data.data)
    }
    catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }
 
  const [totalclients, setTotalclients] = useState(0)
  const [proposal_under_veri, setProposal_under_veri] = useState(0)
  const [proposal_under_modi, setProposal_under_modi] = useState(0)
  const [submitted_proposal, setSubmitted_proposal] = useState(0)
  const fetchAllDashData = async () => {
    try {
      const dashboarddata = await axios.get(`${dashboard_data_url}`, CONFIG_Token);
      console.log(dashboarddata)
      setTotalclients(dashboarddata.data.dashboard.total_clients)
      setProposal_under_veri(dashboarddata.data.dashboard.projects_under_verification)
      setProposal_under_modi(dashboarddata.data.dashboard.project_reverted)
      setSubmitted_proposal(dashboarddata.data.dashboard.sales_submitted)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const columnstotalclient = [
    {
      title: 'S.No',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
    },
    {
      title: 'Client Name',
      dataIndex: 'name',
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
      title: 'Contact Details',
      dataIndex: 'contact_email',
    },
    {
      title: 'Status',
      dataIndex: 'status_msg',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 130,
      render: () => <a className='d-flex justify-content-center'><img src={viewicon} alt="view icon" /> &nbsp;<EditClientModal/></a>,
    },
  ];
  const columnsProposalTeam = [
    {
      title: 'S.No',
      dataIndex: 'proposal_id',
      fixed: 'left',
      width: 80,
    },
    Table.SELECTION_COLUMN,
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
      render: () => <a><img src={viewicon} alt="view icon" />&nbsp;<EditClientModal/></a>,
    },
  ];

  useEffect(function () {
    fetchAllDashData()
    allData()
  }, [])
  return (
    <>
    {/*  onChange={handleStatus} */}
      <Tabs defaultActiveKey="1" centered
        indicator={{ Backgroundcolor: '#07B6AF' }}
        >
        <Tabs.items tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 mx-3 text-center tab_dashboard_size'>
            <img className=' lh-2' src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize'>Total Clients</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{totalclients}</p>

          </div>
        } key="1">
          
          <CustomTable columns={columnstotalclient} data={alldata} />
        </Tabs.items>
        <Tabs.items tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize text'>proposal under verification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_veri}</p>

          </div>
        } key="2" >
       
          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.items>
        <Tabs.items tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize'>proposal under modification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_modi}</p>

          </div>
        } key="3" >
          
          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.items>
        <Tabs.items tab={
          <div className='border-1 borderlightgreen rounded-2 p-2 m-3 text-center tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize'>proposal Submitted to Sales</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{submitted_proposal}</p>

          </div>
        } key="4">
          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.items>

      </Tabs>
    </>
  )
}

export default Tab
