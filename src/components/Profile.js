import React from "react";
import { Row, Col, Collapse, Typography, Avatar } from "antd";

const { Panel } = Collapse;
const { Text, Title, Paragraph } = Typography;
const data = {
    first_name: "Kriti",
    last_name: "Dewangan",
    emp_id: "IN-4523",
    address: "455 S. Airport St. Moncks Corne",
    city: "Raipur",
    zip_code: '490213',
    about_me: "h so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions.",
}
class Projects extends React.Component {
    render() { return (<div style={{ margin: "15px 10px", backgroundColor: "#f5f5f5", minHeight: '60px', padding: '10px' }}>Project</div>) }
}
class ProfileEdit extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="edit_information">
                    <form action="" method="POST">
                        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Text strong >EDIT PROFILE</Text>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Company</label>
                                    <input type="text" name="company" class="form-control" value="Company" disabled />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Employee ID</label>
                                    <input type="text" name="emp_id" class="form-control" value={data.emp_id} disabled />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Email Address:</label>
                                    <input type="email" name="email" class="form-control" placeholder="Email" value="" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">First Name</label>
                                    <input type="text" name="first_name" class="form-control" value={data.first_name} required />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Last Name </label>
                                    <input type="text" name="last_name" class="form-control" value={data.last_name} required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Address</label>
                                    <input type="text" name="address" class="form-control" value={data.address} required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">City</label>
                                    <input type="text" name="city" class="form-control" value={data.city} />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">ZIP Code</label>
                                    <input type="text" name="zip_code" class="form-control" value={data.zip_code} readonly />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">Country</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>INDIA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <label class="profile_details_text">About Me</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" value={data.about_me}></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                <div class="form-group text-right">
                                    <input type="submit" class="btn btn-success" value="Update Profile" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
class Profile extends React.Component {
    render() {
        const style = {
            backgroundColor: 'white',
            minHeight: 200,
            borderRadius: '8px'
        };
        const projectStyle = {
            backgroundColor: 'white',
            minHeight: '50px',
            borderRadius: '8px',
            border: 'none'
        }
        return (
            <div>
                <div className="site-layout-background " align="center"
                    style={{
                        margin: '0px 40px',
                        padding: 24,
                        minHeight: 280,
                        borderRadius: '8px'
                    }}>
                    <div><Avatar size={90} style={{ color: 'white', backgroundColor: '#fde3cf' }} >{data.first_name.charAt(0)}</Avatar></div>
                    <div><Title level={2}>{data.first_name}{' '}{data.last_name}</Title></div>
                    <div style={{ marginBottom: '15px' }}>
                        <a href="#" class="fa fa-facebook"></a><a href="#" class="fa fa-twitter"></a><a href="#" class="fa fa-instagram"></a><a href="#" class="fa fa-linkedin"></a>
                    </div>
                    <div style={{ maxWidth: '600px' }}>
                        <Paragraph strong copyable>{data.about_me}</Paragraph>
                    </div>
                </div>
                <Row gutter={[16, 16]} style={{ margin: '40px' }} justify="space-between">
                    <Col className="gutter-row" md={24} xl={17}>
                        <Row gutter={8} style={style} justify="start">
                            <ProfileEdit />
                        </Row>
                    </Col>
                    <Col className="gutter-row" md={24} xl={7} >
                        <Row gutter={8} style={projectStyle} justify="start">
                            <Collapse bordered={false} expandIconPosition="right" defaultActiveKey={['1']} style={projectStyle}>
                                <Panel header="PROJECTS" key='1' style={{ border: 'none' }}>
                                    <Projects />
                                    <Projects />
                                    <Projects />
                                </Panel>
                            </Collapse>

                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Profile;