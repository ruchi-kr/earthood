import React, { useEffect, useState } from 'react'
// pages
import TabTM from '../Components/TabTM'
// import Modal from '../Components/Modal'

import downloadsign from '../Assets/Vector.png'

const TMdashboard = () => {
//   const CONFIG_OBJ = {                                         //config object
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer " + sessionStorage.getItem("token")
//     }
//   }

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
          </div>
          <div className="d-flex gap-2 align-items-center mx-5">
            <button className='btn border-light-subtle textcolor me-5 bg-white' style={{ fontSize: '14px' }}>Download Report  <img src={downloadsign} alt="downloadsign" /></button>
            {/* <Modal /> */}
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row mx-3">
        <TabTM />
      </div>
      {/* table section */}
    </div>
  )
}

export default TMdashboard
