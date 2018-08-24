import React, {Component} from 'react'

import { NavBar,Icon } from 'antd-mobile';

import './sendType.css'

export default class Sendtype extends Component{
    render(){
        return (
            <div className="sendtype">
               <NavBar className="send-header"
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>{this.props.history.goBack()}}>
                <div className="send-title">
                    <span className="active">门店自提</span>
                    <span>送货上门</span>
                </div>
                </NavBar>
            </div>
        )
    }
}