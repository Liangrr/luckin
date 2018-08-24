import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './list.css'


const Item = List.Item;
const Brief = Item.Brief;

export default class Datas extends Component {
  constructor({history}){
    super();
    console.log(history)
  }
  render() {
    return (
    <div className="app-list">
      <List className="my-list">
        <Item className="first-item"
          arrow="dom"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          <b>西部硅谷店</b><Brief>距您472m</Brief>
          <div className="first-icon">
              <span>自提</span>
              <span>外送</span>
          </div>
        </Item>
        <Item
          arrow="dom"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          现在下单<Brief>ORDER NOW</Brief>
          <div className="icon icon_1">订</div>
        </Item>
        <Item
          arrow="dom"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          咖啡钱包<Brief>COFFEE WALLET</Brief>
          <div className="icon icon_2">钱</div>
        </Item>
        <Item
          arrow="dom"
          multipleLine
          onClick={() => {this.props.history.push('/home/company')}}
          platform="android"
        >
          企业账户<Brief>ENTERPRISE ACCOUNT</Brief>
          <div className="icon icon_3">企</div>
        </Item>
        <Item className="last-item"
          arrow="dom"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          发现luckin<Brief>luckin深圳有88家门面在您身边</Brief>
          <div className="icon icon_4">图</div>
        </Item>
      </List>
      
    </div>);
  }
}