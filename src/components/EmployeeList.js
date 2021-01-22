import React from "react";
import { Table, Avatar, Row, Col } from "antd";
const generateRandomColor = (name) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(randomColor);
    return "#" + randomColor;
}
const columns = [
    { title: '#', dataIndex: 'id', key: 'id', width: '10%' },
    {
        title: 'NAME', key: 'emp_name', width: '25%',
        render: (text, record) => (
            <Row>
                {/* <Col span={5}><Avatar size={40} style={{ color: 'white', backgroundColor: generateRandomColor(text.emp_name) }} >{text.emp_name.charAt(0)}</Avatar></Col> */}
                <Col span={5}><Avatar size={40} style={{ color: 'white', backgroundColor: '#fde3cf' }} >{text.emp_name.charAt(0)}</Avatar></Col>
                <Col span={18}>
                    <b>{text.emp_name}</b><br></br>{text.email}</Col>
            </Row >
            // <div>


            // </div>
        ),
    },
    { title: 'EMPLOYEE ID ', dataIndex: 'emp_id', key: 'emp_id', },
    { title: 'PHONE NO.', dataIndex: 'phone', key: 'phone', },
    { title: 'JOIN DATE', dataIndex: 'join_date', key: 'join_date', },
    { title: 'ROLE', dataIndex: 'role', key: 'role' }
];
const data = [
    { id: '01', emp_name: 'Marshall Nichols', emp_id: 'IN-0215', phone: '+91-810-311-6393', join_date: '12 Jun, 2015', role: 'Web Developer', email: 'marshall-n@gmail.com' },
    { id: '02', emp_name: 'Debra Stewart', emp_id: 'IN-0216', phone: '+91-810-311-6393', join_date: '28 July, 2015', role: 'Web Developer', email: 'Debra2_stw@gmail.com' },
    { id: '03', emp_name: 'Jane Hunt', emp_id: 'IN-0116', phone: '+91-810-311-6393', join_date: '9 May, 2016', role: 'Android Developer', email: 'jane-hunt@gmail.com' },

];
class EmployeeList extends React.Component {
    render() {
        return (
            <div className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    margin: '20px 0px',
                    padding: 24,
                    minHeight: 280,
                    borderRadius: '8px'
                }}>
                <div style={{ marginBottom: '20px' }}>
                    EMPLOYEE LIST
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1000 }}
                // style={{ borderRadius: '10px' }}
                // scroll={{ x: 500, y: 350 }}
                ></Table>
            </div>
        )
    }
}
export default EmployeeList;