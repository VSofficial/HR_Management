import React from "react";
import { Row, Col } from "antd";

const data = {
    emp_name: 'Kriti Dewangan',
}
class Profile extends React.Component {

    render() {
        const style = {
            backgroundColor: 'white',
            minHeight: 200,
            borderRadius: '8px'
        }
        return (
            <div>
                <div className="site-layout-background container"
                    style={{
                        margin: '0px 40px',
                        padding: 24,
                        minHeight: 280,
                        borderRadius: '8px'
                    }}>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6} />
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row gutter={[16, 16]} style={{ margin: '40px' }} justify="space-between">
                    <Col style={style} className=" gutter-row site-layout-background" md={24} xl={18}>
                        Edit Profile
                    </Col>
                    <Col style={style} className=" gutter-row site-layout-background" justify="end" md={24} xl={6}>
                        Projects
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Profile;