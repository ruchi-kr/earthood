import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import CustomTable from './CustomTable'
import EditClientModal from './EditClientModal'
import { Tabs, Table, Tag } from 'antd';
import { dashboard_data_url } from '../config'
import viewicon from '../Assets/viewicon.png';
import editicon from '../Assets/editicon.png';
import groupicon from '../Assets/Group 4.png'
import { get_all_clients_url, get_all_propoposal_url } from '../config';
import { useNavigate } from 'react-router-dom';

const Tab = () => {
  const CONFIG_Token = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  }
  const [alldata, setAlldata] = useState([]);
  const [proposal_verify, setProposal_verify] = useState([]);

  // const navigate = useNavigate();
  
  const allData = async () => {
    try {
      const response = await axios.get(`${get_all_clients_url}`, CONFIG_Token);
      setAlldata(response.data.data);
      console.log("dashboard data",response.data.data)
      const tabstatus = {
        // eslint-disable-next-line no-use-before-define
        "status": statuskey
      }
      const response2 = await axios.post(`${get_all_propoposal_url}`,tabstatus, CONFIG_Token);
      setProposal_verify(response2.data.data);
    }
    catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }
  const [statuskey, setStatus] = useState(1);
  const handleStatus = async (id) => {
    console.log("handle status", id);
    try {
      console.log(id)
      if (id == 3) {
        setStatus(3)
        console.log("calling 3")
      }
      else if (id == 4) {
          setStatus(6)
      }
      else if (id == 2) {
        setStatus(1)
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

  const [totalclients, setTotalclients] = useState(0)
  const [proposal_under_veri, setProposal_under_veri] = useState(0)
  const [proposal_under_modi, setProposal_under_modi] = useState(0)
  const [submitted_proposal, setSubmitted_proposal] = useState(0)

  const [showModal, setShowModal] = useState(false);
  const [clientId, setClientId] = useState(null);

  const handleModalOpen = (id) => {
    setClientId(id);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setClientId(null);
    window.location.reload();
  };

  

  const fetchAllDashData = async () => {
    try {
      const dashboarddata = await axios.get(`${dashboard_data_url}`, CONFIG_Token);
      console.log("dash data", dashboarddata.data.dashboard)
      setTotalclients(dashboarddata.data.dashboard.total_clients)
      setProposal_under_veri(dashboarddata.data.dashboard.status1)
      setProposal_under_modi(dashboarddata.data.dashboard.status3)
      setSubmitted_proposal(dashboarddata.data.dashboard.status6)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const columnstotalclient = [
    {
      title: 'S.No',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      render: (id, record, index) => { ++index; return index; },
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
      render: (text, record) => (
        <span>{record.contact_email} {record.contact_mobile}</span>
      )
    },
    {
      title: 'Status',
      key: 'status_tags',
      dataIndex: 'status_msg',
      // render: (text, record) => (
      //   <>
      //     {record.tags && record.tags.map((tag) => {
      //       let color = record.status_msg === 'active' ? 'green' : 'red';
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 130,
      render: (text, record) => <a className='d-flex justify-content-center'><img src={viewicon} alt="view icon" /> &nbsp;<img src={editicon} onClick={() => handleModalOpen(record.id)} /></a>,
    },
  ];

  const columnsProposalTeam = [
    {
      title: 'S.No',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      render: (id, record, index) => { ++index; return index; },
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
      render: () => <a><img src={viewicon} alt="view icon" />&nbsp;</a>,
    },
  ];

  useEffect(function () {
    fetchAllDashData()
  })
  
  return (
    <>
      {/*  onChange={handleStatus} */}

      <Tabs defaultActiveKey="1" centered
        indicator={{ Backgroundcolor: '#07B6AF' }}
        // onChange={handleStatus}
        onTabClick={handleStatus}
      >
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 mx-1 text-center tabactivecolor tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize mt-3'>Total Clients</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{totalclients}</p>
          </div>
        } key={1}>

          <CustomTable columns={columnstotalclient} data={alldata} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize text mt-3'>proposal under verification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_veri}</p>

          </div>
        } key={2} >

          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-2 p-2 m-3 text-center tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize mt-3'>proposal under modification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_modi}</p>

          </div>
        } key={3} >

          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen rounded-2 p-2 m-3 text-center tab_dashboard_size bg-white'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize mt-3'>proposal Submitted to Sales</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{submitted_proposal}</p>

          </div>
        } key={4}>
          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.TabPane>

      </Tabs>
      :
      {showModal ? <EditClientModal clientId={clientId} onOpenModal={handleModalClose} /> : ''}

    </>
  )
}

export default Tab
