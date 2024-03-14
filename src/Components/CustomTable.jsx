import React, { useState, useEffect } from 'react';
import axios from 'axios'
// ant design components
import { Button, Table } from 'antd';
// api for fetching data
import { get_all_clients_url,get_all_propoposal_url } from '../config';



const CustomTable = (props) => {

  const CONFIG_Token = {                                         //config object
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  }


  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);




  // const start = () => {
  //   setLoading(true);
  //   // ajax request after empty completing
  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };
  // const onSelectChange = (newSelectedRowKeys) => {
  //   console.log('selectedRowKeys changed: ', newSelectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };
  // const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 border-2 border border-light-subtle p-0 rounded-3">
          <div className="d-flex justify-content-end align-items-center p-2 bg-white border-0 shadow-sm rounded-top-3">
            {/* select unselect */}
            {/* <div className=''>
              <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                Unselect
              </Button>
              <span style={{ marginLeft: 8, }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div> */}
            {/* search section */}
            <div>
              <input className="form-control me-2 border-1 bg-light" type="search" placeholder="Search..." aria-label="Search" />
            </div>
          </div>

          <Table  columns={props.columns} dataSource={props.data} scroll={{ x: 1300, }}  />          {/* <Table rowSelection={rowSelection} columns={props.column} dataSource={props.datas} scroll={{ x: 1300}} /> */}

          {/* rowSelection={rowSelection} pagination={{position: [top, bottom],}}  pagination={{position: [bottom]}}*/}
        </div>
      </div>
    </div>

  );
};
export default CustomTable;