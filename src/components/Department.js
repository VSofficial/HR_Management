import React from "react";
import { Table, Button } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const columns = [
    { title: '#', dataIndex: 'id', key: 'id', width: '10%' },
    { title: 'DEPARTMENT NAME', dataIndex: 'dept_name', key: 'dept_name', },
    { title: 'DEPARTMENT HEAD', dataIndex: 'dept_head', key: 'dept_head', },
    { title: 'TOTAL EMPLOYEE', dataIndex: 'total_emp', key: 'total_emp', },
    {
        title: 'ACTION', key: 'action',
        render: (text, record) => (
            // <Space size="middle">
            <span>
                <Button icon={<EditOutlined />} /> {'  '}<Button icon={<DeleteOutlined />} />
            </span>
        ),
    },
];
const data = [
    {
        id: '01',
        dept_name: 'Web Development',
        dept_head: 'John Smith',
        total_emp: '102',
    }, {
        id: '02',
        dept_name: 'Marketing',
        dept_head: 'Maryam Amiri',
        total_emp: '13',
    },
    {
        id: '03',
        dept_name: 'App Developement',
        dept_head: 'Frank Camly',
        total_emp: '21',
    },
    {
        id: '04',
        dept_name: 'Accounts',
        dept_head: 'Gary Camara',
        total_emp: '84',
    },
];
class Department extends React.Component {
    render() {
        return (
            <div className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    margin: '20px 40px',
                    padding: 24,
                    minHeight: 280,
                    borderRadius: '8px'
                }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 500 }}
                // style={{ borderRadius: '10px' }}
                // scroll={{ x: 500, y: 350 }}
                ></Table>
            </div>

        )
    }
}
export default Department;