import React, { useState, useEffect } from 'react'
import '../index.css'
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

  const navigate = useNavigate();

  const allData = async () => {
    try {
      const response = await axios.get(`${get_all_clients_url}`, {
        ...CONFIG_Token,
        params: {
          page: pagination.current,
          pageSize: pagination.pageSize
        }});
      setAlldata(response.data.data);
      console.log("dashboard data", response.data.data)
      const tabstatus = {
        // eslint-disable-next-line no-use-before-define
        "status": statuskey
      }
      const response2 = await axios.post(`${get_all_propoposal_url}`, tabstatus, CONFIG_Token);
      setProposal_verify(response2.data.data);
    }
    catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };
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
  }, [pagination,statuskey]);

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
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      render: (id, record, index) => { ++index; return index; },
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Client Name</span>,
      render: (text, record) => {
        return (
          <span className='text-capitalize textcolor font14px fw-bold'>{record.name}</span>
        );
      }
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contact Person</span>,
      dataIndex: 'contact_person',
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Country</span>,
      render: (text, record) => {
        return (
          <span className='text-capitalize textcolorgreen fw-bold p-2 rounded-4 border-0 bg_lightgreen '>{record.country}</span>
        );
      }
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Contact Details</span>,
      render: (text, record) => (
        <span className='lh-1'>
          <p className='textcolorblue'>{record.contact_email}</p>
          <p className='textlightgreen'>{record.contact_mobile}</p>
        </span>

      )
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Status</span>,
      render: (text, record) => {
        let color = record.status === 1 ? "green" : "volcano";
        return (
          <Tag className='px-4 py-2 rounded-5 font12px fw-bold' color={color}>{record.status_msg}</Tag>
        );
      }
    },
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>Action</span>,
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      render: (text, record) => <a className='d-flex justify-content-center'><img src={viewicon} alt="view icon" onClick={() => navigate(`/clients/${record.id}`)} /> &nbsp;<img src={editicon} onClick={() => handleModalOpen(record.id)} /></a>,
    },
  ];

  const columnsProposalTeam = [
    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>S.No</span>,
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
      render: (id, record, index) => { ++index; return index; },
    },

    {
      title: <span className='text-capitalize textcolumntitle font14px fw-bold'>EId</span>,
      fixed: 'left',
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
      dataIndex: 'client_name',
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

  useEffect(function () {
    fetchAllDashData()
  })

  return (
    <>
      {/*  onChange={handleStatus} */}

      <Tabs defaultActiveKey="1" centered
        onTabClick={handleStatus}
      >
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-3 p-2 mx-1 text-center tabactivecolor tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize mt-3'>Total Clients</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{totalclients}</p>
          </div>
        } key={1}>

          <CustomTable columns={columnstotalclient} data={alldata} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-3 p-2 m-3 text-center tabactivecolor tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize text mt-3'>proposal under verification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_veri}</p>

          </div>
        } key={2} >

          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen bg-white rounded-3 p-2 m-3 text-center tabactivecolor tab_dashboard_size'>
            <img src={groupicon} alt="icon" />
            <p className='font14px textlightgreen text-capitalize mt-3'>proposal under modification</p>
            <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_modi}</p>

          </div>
        } key={3} >

          <CustomTable columns={columnsProposalTeam} data={proposal_verify} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={
          <div className='border-1 borderlightgreen rounded-3 p-2 m-3 text-center tabactivecolor tab_dashboard_size bg-white'>
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
