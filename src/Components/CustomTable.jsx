import React from 'react';
// ant design components
import { Table } from 'antd';

const CustomTable = (props) => {
 
  return (
    <div className='container-fluid'>
      <div className="row mx-3">
        <div className="col-12 border-2 border border-light-subtle p-0 rounded-3">
          <div className="d-flex justify-content-end align-items-center p-2 bg-white border-0 shadow-sm rounded-top-3">         
            <div>
              <input className="form-control me-2 border-1 bg-light" type="search" placeholder="Search..." aria-label="Search" />
            </div>
          </div>
          <Table columns={props.columns} dataSource={props.data} scroll={{ x: 1300, }} pagination='bottomCenter'/>         
           {/* <Table rowSelection={rowSelection} columns={props.column} dataSource={props.datas} scroll={{ x: 1300}} /> */}
          {/* rowSelection={rowSelection} pagination={{position: [top, bottom],}}  pagination={{position: [bottom]}}*/}
        </div>
      </div>
    </div>
  );
};
export default CustomTable;