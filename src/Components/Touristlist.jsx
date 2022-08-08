import React,{useState} from 'react'
import Navbar from './Navbar'
import { Card,Table, Radio, Divider, DatePicker, Space  } from 'antd';
import './css/Touristlist.css'
function Touristlist() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Disabled User',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
      ]; // rowSelection object indicates the need for row selection
      
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };
      const [selectionType, setSelectionType] = useState('checkbox');

      function onChange(date, dateString) {
        console.log(date, dateString);
      }
  return (
    <div>
        <div>
            <Navbar/>
            <div className="card-t">
    <Card title="TOURIST LIST" bordered={false} style={{ width: 500 }}>
     
      <div className='date'>
      <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
      </div>
      <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
       
      </Radio.Group>

      <Divider />

      <Table  style={{width: 500 }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
    </Card>
  </div>
        </div>
    </div>
  )
}

export default Touristlist