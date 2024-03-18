import React, { useEffect, useState } from 'react'

// pages
import Tab from '../Components/Tab'
import Modal from '../Components/Modal'

import downloadsign from '../Assets/Vector.png'

const PTdashboard = () => {
  const CONFIG_OBJ = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  }


  let [username, setUserName] = useState('');


  useEffect(function () {
    const user = sessionStorage.getItem("user");
    const userData = JSON.parse(user);
    setUserName(userData.name);
  }, [])

  return (
    <div className="container-fluid m-0 p-0 bg-light">
      {/* 1st row */}
      <div className="row">
        <div className="d-flex justify-content-between align-items-center mx-5 my-4">
          {/* detail section */}
          <div>
            <h5 className='textcolorblue'>Welcome Back, {username}</h5>
            {/* <p className='textlightgreen'>Track, manage & forecast your day to day activity!</p> */}
          </div>
          <div className="d-flex gap-2 align-items-center mx-5">
            <button className='btn border-light-subtle textcolor bg-white' style={{ fontSize: '14px' }}>Download Report  <img src={downloadsign} alt="downloadsign" /></button>
            <Modal />
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row mx-0">
        <Tab />
      </div>
      {/* table section */}
    </div>
  )
}

export default PTdashboard
