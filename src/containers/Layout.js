import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Divider } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import MenuItem from "antd/lib/menu/MenuItem";
import { DeploymentUnitOutlined, FundProjectionScreenOutlined, PayCircleOutlined, UserOutlined, SettingOutlined, LogoutOutlined, MenuOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class CustomLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      // <Layout className="layout">
      //   <Header>
      //     <div className="logo" />
      //     <Menu
      //       theme="dark"
      //       mode="horizontal"
      //       defaultSelectedKeys={["2"]}
      //       style={{ lineHeight: "64px" }}
      //     >
      //       {this.props.isAuthenticated ? (
      //         <Menu.Item key="2" onClick={this.props.logout}>
      //           Logout
      //         </Menu.Item>
      //       ) : (
      //         <Menu.Item key="2">
      //           <Link to="/login">Login</Link>
      //         </Menu.Item>
      //       )}
      //     </Menu>
      //   </Header>
      //   <Content style={{ padding: "0 50px" }}>
      //     <Breadcrumb style={{ margin: "16px 0" }}>
      //       <Breadcrumb.Item>
      //         <Link to="/">Home</Link>
      //       </Breadcrumb.Item>
      //       {this.props.token !== null ? (
      //         <Breadcrumb.Item>
      //           <Link to={`/profile/${this.props.userId}`}>Profile</Link>
      //         </Breadcrumb.Item>
      //       ) : null}
      //       {this.props.token !== null && this.props.is_teacher ? (
      //         <Breadcrumb.Item>
      //           <Link to="/create">Create</Link>
      //         </Breadcrumb.Item>
      //       ) : null}
      //     </Breadcrumb>
      //     <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      //       {this.props.children}
      //     </div>
      //   </Content>
      //   <Footer style={{ textAlign: "center" }}>
      //     Ant Design ©2016 Created by Ant UED
      //   </Footer>
      // </Layout>
      <Layout>
        <Sider
          trigger={null} collapsible collapsed={this.state.collapsed}
          // breakpoint="lg"
          // collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ minHeight: 600 }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" >
            <Menu.Item key="/Employee" ><Link to="/Employee"><span><UserOutlined />Employee</span></Link></Menu.Item>
            <MenuItem key="/Department" ><Link to="/Department"><span><DeploymentUnitOutlined />Departments</span></Link></MenuItem>
            <MenuItem key="/Project" ><Link to="/Project"><span><FundProjectionScreenOutlined />Projects</span></Link></MenuItem>
            <MenuItem key="/Payroll" ><Link to="/Payroll"><span><PayCircleOutlined />Payroll</span></Link></MenuItem>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header " breakpoint="lg" collapsible
            collapsedWidth="0">
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
            <Menu style={{ float: 'right' }} theme="dark" mode="horizontal" overflowedIndicator={<MenuOutlined />}>
              <Menu.Item key='/' ><Link to="/"><span>Home</span></Link></Menu.Item>
              <Menu.Item key='/About' ><Link to="/About"><span>About</span></Link></Menu.Item>
              <Menu.Item key='/Holidays' ><Link to="/Holidays"><span>Holidays</span></Link></Menu.Item>
              <Menu.Item key='/Policy' ><Link to="/Policy"><span>Policy</span></Link></Menu.Item>
              <Menu.Item key='/FAQ' ><Link to="/FAQ"><span>FAQs</span></Link></Menu.Item>
              <SubMenu title={<span><Icon type="setting" /></span>}>
                <Menu.Item key='/Profile'><Link to="/Profile"><span><UserOutlined />Profile</span></Link></Menu.Item>
                <Menu.Item key='/Signout'><Link to="/Signout"><span><LogoutOutlined />Sign out</span></Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content
            // className="site-layout-background"
            style={{
              // margin: '24px 16px',

              // margin: '40px 40px',
              // padding: 24,
              // minHeight: 280,
              // borderRadius: '8px'
            }}>

            {this.props.children}
          </Content>
          <Footer></Footer>
        </Layout>

      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    is_teacher: state.auth.is_teacher
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
