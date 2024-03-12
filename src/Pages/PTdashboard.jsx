import React from 'react'
import Tab from '../Components/Tab'
import Modal from '../Components/Modal'
import Table from '../Components/Table'
import logo from '../Assets/logo.png'
import downloadsign from '../Assets/Vector.png'
const PTdashboard = () => {
  const CONFIG_OBJ = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  }

  return (
    <>
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-12">
            {/* navbar section */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
              <div className="container-fluid">
                <img className='mx-2' width='86px' height='15px' src={logo} alt="earthoodlogo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active textgrey btnhovergrey" aria-current="page" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item textgrey btnhovergrey">
                      <a className="nav-link " href="#">Clients</a>
                    </li>
                    <li className="nav-item textgrey btnhovergrey">
                      <a className="nav-link " href="#">Projects</a>
                    </li>
                    <li className="nav-item textgrey btnhovergrey">
                      <a className="nav-link" href="#">Invoice</a>
                    </li>
                    <li className="nav-item textgrey btnhovergrey">
                      <a className="nav-link" href="#">People</a>
                    </li>
                    <li className="nav-item textgrey btnhovergrey">
                      <a className="nav-link" href="#">Everything</a>
                    </li>
                  </ul>
                  {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div></nav>

          </div>
        </div>
      </div >
      {/*  */}
      {/* table section */}
      <div className="d-flex justify-content-between align-items-center m-3">
        <div>
          <h5 className='textcolorblue'>Welcome Back, Hemanshu</h5>
          <p className='textlightgreen'>Track, manage & forecast your day to day activity!</p>
        </div>
        <div className="d-flex gap-2 align-items-center mx-5">
          <button className='btn border-light-subtle textcolor' style={{fontSize: '14px'}}>Download Report  <img src={downloadsign} alt="downloadsign"/></button>
          
          <div className="nav-item border-0 dropdown " role="group">
            <a class="nav-link dropdown-toggle fontcolor" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Add 
            </a>
            <ul className="dropdown-menu">
              <li><button className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Client</button></li>
              <li><button className="nav-link" to="#">Add Project</button></li>
            </ul>
          </div>
        </div>
      </div>
<Tab/>
      <Modal />
      <Table />




    </>
  )
}

export default PTdashboard
