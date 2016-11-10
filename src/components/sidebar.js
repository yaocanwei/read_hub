import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// 引入Antd组件
import { Menu, Icon, Switch } from 'antd';
import { Link, IndexLink } from 'react-router';
import moment from 'moment';
import 'antd/dist/antd.css'
import '../css/main.css'
// import { DatePicker } from 'antd';

const SubMenu = Menu.SubMenu;


export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'light'
		}
	}
	changeTheme(value) {
		this.setState({
	      theme: value ? 'dark' : 'light',
	    });
	}
	render(){
		return(
			<div>
				<Switch onChange={this.changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
				<br/>
				<br/>
				<Menu theme={this.state.theme}
					onClick={this.handleClick}
					style={{ width: 240 }}
					defaultOpenKeys={['sub2']}	
					selectedKeys={[this.state.current]}
					mode="inline"
				>
					<SubMenu key="sub1" title={<span><Icon type="user" /><span>陌生人</span></span>}>
			            <Menu.Item key="1"><Link to="/profile">小应用</Link></Menu.Item>
			            <Menu.Item key="2">Option 2</Menu.Item>
			            <Menu.Item key="3">Option 3</Menu.Item>
			            <Menu.Item key="4">Option 4</Menu.Item>
			        </SubMenu>
			        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>朋友</span></span>}>
			            <Menu.Item key="5">Option 5</Menu.Item>
			            <Menu.Item key="6">Option 6</Menu.Item>
			            <SubMenu key="sub3" title="Submenu">
			              	<Menu.Item key="7">Option 7</Menu.Item>
			              	<Menu.Item key="8">Option 8</Menu.Item>
			            </SubMenu>
			        </SubMenu>
			        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>恋人</span></span>}>
			            <Menu.Item key="9">Option 9</Menu.Item>
			            <Menu.Item key="10">Option 10</Menu.Item>
			            <Menu.Item key="11">Option 11</Menu.Item>
			            <Menu.Item key="12">Option 12</Menu.Item>
			        </SubMenu>
			        <SubMenu key="sub5" title={<span><Icon type="team" /><span>夫妻</span></span>}>
			            <Menu.Item key="9">Option 9</Menu.Item>
			            <Menu.Item key="10">Option 10</Menu.Item>
			            <Menu.Item key="11">Option 11</Menu.Item>
			            <Menu.Item key="12">Option 12</Menu.Item>
			        </SubMenu>
				</Menu>
		    </div>
		)
	}
}