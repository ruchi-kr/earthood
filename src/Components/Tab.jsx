import React,{useState,useEffect} from 'react'
import axios from 'axios'
// ant design components
import { Tabs } from 'antd'
// api for fetching data
import { total_client_number_url, prop_under_veri_number_url, prop_under_modi_number_url } from '../config'

//figma icons 

// import vectorarrow from '../Assets/Vectorarrow.png'
import groupicon from '../Assets/Group 4.png'
const Tab = () => {
    const [totalclients,setTotalclients] = useState(0)
    const[proposal_under_veri,setProposal_under_veri]= useState(0)
    const[proposal_under_modi,setProposal_under_modi]= useState(0)
    const fetchAllDashData = async () =>{
        const totalclientsdata = await axios.get(`${total_client_number_url}`);
        console.log(totalclientsdata)
        setTotalclients(totalclientsdata.dashboard.total_clients)
      
        // const proposal_under_veridata = await axios.get(`${prop_under_veri_number_url}`);
        // setProposal_under_veri(proposal_under_veridata.dashboard.projects_under_verification)
      
        // const proposal_under_modidata = await axios.get(`${prop_under_modi_number_url}`);
        // setProposal_under_modi(proposal_under_modidata.dashboard.project_reverted)
      }
      
      
      useEffect(function(){
         fetchAllDashData()
      },[])
    return (
        <>
            <Tabs defaultActiveKey="1" centered 
            indicator={{ Backgroundcolor: '#07B6AF'}}>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2 p-2 mx-3 text-center tab_dashboard_size'>
                        <img className=' lh-2' src={groupicon} alt="icon" />
                        <p className='font14px textlightgreen text-capitalize'>Total Clients</p>
                        <p className='textcolorblue' style={{ fontSize: '35px' }}>{totalclients}</p>
                        {/* <div className='d-flex justify-content-between'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4'>
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div> */}
                    </div>
                } key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2 p-2 m-3 text-center tab_dashboard_size'>
                        <img src={groupicon} alt="icon" />
                        <p className='font14px textlightgreen text-capitalize text'>proposal under verification</p>
                        <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_veri}</p>
                        {/* <div className='d-flex justify-content-between'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4'>
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div> */}
                    </div>
                } key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2 p-2 m-3 text-center tab_dashboard_size'>
                        <img src={groupicon} alt="icon" />
                        <p className='font14px textlightgreen text-capitalize'>proposal under modification</p>
                        <p className='textcolorblue' style={{ fontSize: '35px' }}>{proposal_under_modi}</p>
                        {/* <div className='d-flex justify-content-between align-items-center'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4 d-flex align-items-center justify-content-around' style={{width:'56px',height:'27px'}} >
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div> */}
                    </div>
                } key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>

            </Tabs>
        </>
    )
}

export default Tab
