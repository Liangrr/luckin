import React, { Component } from 'react'
import './Tabs.css'

import { TabBar } from 'antd-mobile';

const tabsData = [
    {id: 1, title: '首页', path: '/home', badge: '',
        SVG: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectSVG: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg'
    },
    {id: 2, title: '菜单', path: '/menu', badge: '',
        SVG: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selectSVG: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg'
    },
    {id: 3, title: '订单', path: '/order', badge: '',
        SVG: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selectSVG: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg'
    },
    {id: 4, title: '购物车', path: '/car', badge: '',
        SVG: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selectSVG: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
    },
    {id: 5, title: '我的', path: '/mine', badge: '',
        SVG: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selectSVG: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
    },
];

export default class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: '首页',
      hidden: false
    };
  }

  getTab(itemInfo){
      return (
        <TabBar.Item
            title={itemInfo.title}
            key={itemInfo.id}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+itemInfo.SVG+') center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url('+itemInfo.selectSVG+') center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === itemInfo.title}
            badge={itemInfo.badge}
            onPress={this.selectTab.bind(this, itemInfo.title, itemInfo.path)}
          >
        </TabBar.Item>
      )
  }

  selectTab(title, path){
    // console.log(title, path);
    this.setState({selectedTab: title});
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="app-tabs">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        {
            tabsData.map((item)=>{
                return this.getTab(item);
            })
        }
        </TabBar>
      </div>
    );
  }
}