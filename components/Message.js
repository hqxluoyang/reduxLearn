import React, { Component, PropTypes ,AddOns} from 'react'
import RaisedButton from 'material-ui/lib/raised-button';

import R from 'react';

import MStyle from '../css/MessageStyle.less'

import ReactCSSTransitionGroup from 'react-addons-transition-group';
//var ReactCSSTransitionGroup = R.addons.CSSTransitionGroup;
//console.log("MStyle:" , MStyle , AddOns)
class Message extends Component{

	click(){
		//alert("hehe")
	}
	render(){
		const {click , text} = this.props;
		return(
			
			<div className={MStyle.bgC}>
				<ReactCSSTransitionGroup transitionName="msgAnim">
					<ul className={MStyle.panel}>
						<li className={MStyle.mesgheader}>X</li>
						<li className={MStyle.textT}>欢迎来到 react</li><hr/>
						<li className={MStyle.subText}><RaisedButton onClick={this.click} label="Default" /></li>
					</ul>
				</ReactCSSTransitionGroup>
				<div className={MStyle.bg}>
				</div>
			</div>
		)
	}
}

export default Message
