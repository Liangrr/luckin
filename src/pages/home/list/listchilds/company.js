import React, {Component} from 'react'

import { NavBar,Icon, List  } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Company extends Component{
    render(){
        return (
            <div>
               <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>{this.props.history.goBack()}}>
                企业账户
                </NavBar>
                <List className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>加入企业</Item>
                    <Item arrow="horizontal" onClick={() => {}}>申请企业账户</Item>
                </List>
            </div>
        )
    }
}