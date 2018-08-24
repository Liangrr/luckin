import React, {Component} from 'react'

import { NavBar,Icon } from 'antd-mobile';

import './wallet.css'

export default class Wallet extends Component{
    render(){
        return (
            <div className="wallet">
               <NavBar className="wallet-header"
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>{this.props.history.goBack()}}>
                咖啡钱包
                </NavBar>
            </div>
        )
    }
}