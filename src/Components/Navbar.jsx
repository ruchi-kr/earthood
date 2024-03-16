import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
// icons from figma
import logo from '../Assets/logo.png'
import searchicon from '../Assets/Searchicon.png'
import helpicon from '../Assets/helpicon.png'
import notification from '../Assets/notification.png'

// ant design components
import {Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {

    const navigate = useNavigate();
    const logout = () => {
      sessionStorage.removeItem("token");
      navigate("/login");
    }

  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-white shadow-sm mx-0 p-3">
              <div className="container-fluid">
                <img className='mx-2' width='86px' height='15px' src={logo} alt="earthoodlogo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active textgrey btnhovergrey mx-2" aria-current="page" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item textgrey btnhovergrey mx-2">
                      <Link className="nav-link " to="/clients">Clients</Link>
                    </li>
                    <li className="nav-item textgrey btnhovergrey mx-2">
                      <Link className="nav-link " to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item textgrey btnhovergrey mx-2">
                      <Link className="nav-link" to="/invoice">Invoice</Link>
                    </li>
                   
                  </ul>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <img src={searchicon} alt="search icon" />
                  <img src={helpicon} alt="help icon" />
                  <img src={notification} alt="notification icon" />
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: '1',
                          label: (
                            <button className="nav-link" onClick={() => logout()}>LOGOUT</button>
                          )
                        }
                      ]
                    }}
                    placement="bottom"
                    arrow
                  >
                    <Avatar
                      size={{ xs: 16, sm: 24, md: 32, lg: 40, xl: 40, xxl: 70 }}
                      icon={<UserOutlined />}
                    />
                     </Dropdown>
                </div>
              </div>
            </nav>
    </div>
  )
}

export default Navbar
