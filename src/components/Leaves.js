import React from "react";
import { Table, Button, Avatar, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const columns = [
    {
        title: '#', key: 'avtar', width: '7%',
        render: (text, record) => (
            <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} >{text.emp_name.charAt(0)}</Avatar>
        )
    },
    { title: 'NAME', key: 'emp_name', dataIndex: 'emp_name' },
    { title: 'EMPLOYEE ID ', dataIndex: 'emp_id', key: 'emp_id', },
    { title: 'LEAVE TYPE', dataIndex: 'type', key: 'type', },
    { title: 'DATE', dataIndex: 'date', key: 'date', },
    { title: 'REASON', dataIndex: 'reason', key: 'reason' },
    {
        title: 'ACTION', key: 'action',
        render: (text, record) => (
            <span>
                <Button icon={EditOutlined} /> {'  '}<Button icon={DeleteOutlined} />
            </span>
        )
    }
];
const data = [
    { emp_name: "Marshall Nichols", emp_id: "LA-8150", type: "Casual Leave", date: '24 July, 2019 to 26 July, 2019', reason: "Going to family function" },
    { emp_name: "Marshall Nichols", emp_id: "LA-8150", type: "Casual Leave", date: '24 July, 2019 to 26 July, 2019', reason: "Going to family function" }

];
class Leaves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/leave/')
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                this.setState({ data: data });
            })
            .catch((err) => {
                console.log(err);
            })
    }
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
                    LEAVE REQUESTS
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1000 }}></Table>

            </div>
        )
    }
}
export default Leaves;