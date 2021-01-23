import React from "react";
import { Table, Avatar, Row, Col, Button, Modal, Form, Input, DatePicker } from "antd";
let count = 1;
const generateRandomColor = (name) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(randomColor);
    return "#" + randomColor;
}
const columns = [
    {
        title: '#', key: 'id', width: '10%',
        render: (text, record) => (
            <span>{count++}</span>
        )
    },
    {
        title: 'NAME', key: 'emp_name', width: '27%',
        render: (text, record) => (
            <Row>
                {/* <Col span={5}><Avatar size={40} style={{ color: 'white', backgroundColor: generateRandomColor(text.emp_name) }} >{text.emp_name.charAt(0)}</Avatar></Col> */}
                <Col span={5}><Avatar size={40} style={{ color: 'white', backgroundColor: '#fde3cf' }} >{text.first_name.charAt(0)}</Avatar></Col>
                <Col span={18}>
                    <b>{text.first_name}{' '}{text.last_name}</b><br></br>{text.email}</Col>
            </Row >
        ),
    },
    { title: 'EMPLOYEE ID ', dataIndex: 'username', key: 'username', },
    { title: 'PHONE NO.', dataIndex: 'phone', key: 'phone', },
    { title: 'JOIN DATE', dataIndex: 'date_joined', key: 'date_joined', },
    { title: 'ROLE', dataIndex: 'role', key: 'role' }
];

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            phone: "",
            role: "",
        };
        this.handleNewEmployee = this.handleNewEmployee.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleNewEmployee = () => {
        this.setState({ visible: true });
    };
    handleOk = (e) => {
        console.log(e);
        console.log("new employee added");
        this.setState({ visible: false, dummy: e.first_name });
    };
    handleChange(e) {
        // e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleCancel = () => {
        this.setState({ visible: false });
    };
    componentDidMount() {
        fetch('http://127.0.0.1:8000/personalinfo/')
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
        count = 1;
        return (

            <div className="site-layout-background"
                style={{
                    margin: '20px 0px',
                    padding: 24,
                    minHeight: 280,
                    borderRadius: '8px'
                }}>
                <div style={{ marginBottom: '20px' }}>
                    <span>EMPLOYEE LIST</span>
                    <span><button type='button' onClick={this.handleNewEmployee} className="btn btn-secondary btn-sm float-right"><i class="fas fa-plus"> </i>{'  '} Add</button></span>
                    <Modal
                        visible={this.state.visible}
                        title="Add Employee"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <Form
                            name='basic'
                            onFinish={function (e) { console.log(e) }}
                        >
                            <Form.Item
                                name='username'
                                style={{ display: 'inline-block', width: '23%' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}><Input placeholder='Employee ID' /></Form.Item>
                            <Form.Item
                                name='first_name'
                                style={{ display: 'inline-block', width: '22%', marginLeft: '15px' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}><Input placeholder='First Name' /></Form.Item>
                            <Form.Item
                                name='last_name' required={true} style={{ display: 'inline-block', width: '22%', marginLeft: '15px' }}>
                                <Input placeholder='Last Name' />
                            </Form.Item>
                            <Form.Item
                                name='email' required={true} style={{ display: 'inline-block', width: '23%', marginLeft: '15px' }}>
                                <Input placeholder='Email ID' />
                            </Form.Item>
                            <Form.Item
                                name='phone' required={true} style={{ display: 'inline-block', width: '32%' }}>
                                <Input placeholder='Phone Number' />
                            </Form.Item>
                            <Form.Item
                                name='date_joined' required={true} style={{ display: 'inline-block', width: '31%', marginLeft: '15px' }}>
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                name='role' required={true} style={{ display: 'inline-block', width: '30%', marginLeft: '15px' }}>
                                <Input placeholder='Role' />
                            </Form.Item>
                            <Form.Item>
                                <Button type="secondary" htmlType="submit" style={{ float: 'right' }}>Save</Button>
                            </Form.Item>
                        </Form>
                        {/* <form onSubmit={this.handleOk}>
                            <label>
                                Name:
                            <input type="text" id='first_name' value={this.state.first_name} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form> */}
                    </Modal>
                </div>

                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    scroll={{ x: 1000 }}
                ></Table>
            </div>
        )
    }
}
export default EmployeeList;