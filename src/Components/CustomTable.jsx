import React from 'react';
import { Table } from 'antd';

const CustomTable = (props) => {
  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Pagination:', pagination);
    console.log('Filters:', filters);
    console.log('Sorter:', sorter);
  };

  return (
    <div className='container-fluid'>
      <div className="row mx-3">
        <div className="col-12 border-2 border border-light-subtle p-0 rounded-3">
          <div className="d-flex justify-content-end align-items-center p-2 bg-white border-0 shadow-sm rounded-top-3">         
            <div>
              <input className="form-control me-2 border-1 bg-light" type="search" placeholder="Search..." aria-label="Search" />
            </div>
          </div>
        
          <Table
            columns={props.columns}
            dataSource={props.data}
            scroll={{ x: 1300 }}
            pagination={{
              position: ['bottomCenter'],
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              pageSizeOptions: ['10', '20', '50'],
              pageSize: 10, // Set the page size to match the data from backend
              total: props.total // Total count of items from backend
            }}
            onChange={handleTableChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
