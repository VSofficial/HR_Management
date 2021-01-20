import React from "react";
import { Form, Input, Button, Checkbox, Select } from 'antd';
const { Option } = Select;

class Login extends React.Component {
    render() {
        const layout = {
            // labelCol: { span: 8 },
            // wrapperCol: { span: 16 },
        };
        const tailLayout = {
            // wrapperCol: { offset: 8, span: 8 },
        };
        return (
            <div>
                <div style={{ maxHeight: '200px', maxWidth: '250px', margin: '50px' }}>
                    LOGIN TO YOUR ACCOUNT
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true, user: 'admin' }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item name="user" rules={[{ required: true }]}>
                            <Select defaultValue="admin">
                                <Option value="admin" >Admin</Option>
                                <Option value="employee">Employee</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="email"

                            rules={[{ type: 'email', required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='xyz@gmail.com' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                    </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Login;