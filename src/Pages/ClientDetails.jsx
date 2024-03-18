import React, { useState,useEffect } from 'react'
import { Tabs} from 'antd';
import axios from 'axios';
import ViewClient from '../Components/ViewClient';
const ClientDetails = () => {

    const CONFIG_Token = {                                         //config object
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        }
    }

    


  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 d-flex justify-content-between">
                <p>#1111-EARTHOOD</p>
                <p>edit icon</p>
            </div>
        </div>
        <div className="row">
        <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<p>Overview</p> } key={1}>
        <ViewClient/>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<p>Project Details</p> } key={2} >

        </Tabs.TabPane>
        <Tabs.TabPane tab={<p></p> } key={3} >

          
        </Tabs.TabPane>
        <Tabs.TabPane tab={<p></p>} key={4}>
          
        </Tabs.TabPane>

      </Tabs>
        </div>
    </div>
    </>
  )
}

export default ClientDetails