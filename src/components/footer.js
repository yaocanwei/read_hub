import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="ft">
				<span className="fr">
					<a href="#">关于网站</a>
					<a href="#">完善网站</a>
					<a href="#">联系我</a>
					<a href="#">免责声明</a>
					<a href="#">帮助中心</a>
					<a href="#">开发者</a>
					<a href="#">友情连接</a>
				</span>
				<span className="fl">Copyright © Cheney</span>
			</div>		
		)
	}
}