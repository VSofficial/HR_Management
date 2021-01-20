import React from "react";
import { Table, Button, Row, Col } from "antd";
import EmployeeList from './EmployeeList';
import Leaves from './Leaves';
import { AlignLeftOutlined, PlusOutlined } from "@ant-design/icons";

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: true,
            leave: false,
        }
        this.handleEmp = this.handleEmp.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }
    handleEmp = () => {
        if (!this.state.emp)
            this.setState({ emp: true, leave: false });
    }
    handleLeave = () => {
        if (this.state.emp)
            this.setState({ emp: false, leave: true });
    }
    render() {
        const stat = {
            // borderRadius: 7,
            backgroundColor: 'white',
            minHeight: 75,
            // padding: '8px 0 0 0'
        };
        const style = { backgroundColor: 'white', padding: '8px 0 0 0', borderRadius: 7, minHeight: 75 };
        const iconStyle = { fontSize: 55, textAlignment: 'center', color: '#1890ff' };
        const buttonStyle = { border: '5px' };
        return (
            <div
                style={{
                    // margin: '24px 16px',
                    margin: '0px 40px',
                    // padding: 24,
                    // minHeight: 280,
                    // borderRadius: '8px'
                }}>
                <div>
                    <Button type='text' onClick={this.handleEmp} >All</Button>
                    <Button type='text' onClick={this.handleLeave}>Leave Request</Button>
                    {/* <Button type='ghost' style={{ float: 'right' }}><span><PlusOutlined />Add</span></Button> */}
                </div>
                <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
                    <Col className="gutter-row" xs={24} sm={24} md={12} xl={6}>
                        <Row gutter={8} style={style} justify="start">
                            <Col className="gutter-row" span={12} align='start' push={1} style={{ fontSize: '18px' }} >
                                <div>Total Employee</div><div><b>104</b></div>
                            </Col>
                            <Col className="gutter-row" span={12} align='right' pull={2} >
                                <AlignLeftOutlined rotate='270' style={iconStyle} />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} >
                        <Row gutter={8} style={style} justify="start">
                            <Col className="gutter-row" span={12} align='start' push={1} style={{ fontSize: '18px' }} >
                                New Employee<br /><b>12</b>
                            </Col>
                            <Col className="gutter-row" span={12} align='right' pull={2} >
                                <AlignLeftOutlined rotate='270' style={iconStyle} />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} >
                        <Row gutter={8} style={style} justify="start">
                            <Col className="gutter-row" span={12} align='start' push={1} style={{ fontSize: '18px' }} >
                                Male<br /><b>75</b>
                            </Col>
                            <Col className="gutter-row" span={12} align='right' pull={2} >
                                <AlignLeftOutlined rotate='270' style={iconStyle} />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} xl={6} >
                        <Row gutter={8} style={style} justify="start">
                            <Col className="gutter-row" span={12} align='start' push={1} style={{ fontSize: '18px' }} >
                                Female<br /><b>20</b>
                            </Col>
                            <Col className="gutter-row" span={12} align='right' pull={2} >
                                <AlignLeftOutlined rotate='270' style={iconStyle} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {this.state.emp && <EmployeeList />}
                {this.state.leave && <Leaves />}
            </div>
        )
    }
}
export default Employee;