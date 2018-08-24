import React, { Component } from 'react';

import './Index.css'

import {PullToRefresh} from 'antd-mobile';

import {Route} from 'react-router-dom'
import Header from '../header/header'
import List from '../list/list'

export default class Index extends Component{
    constructor() {
        super();
        this.state = {
          refreshing: false,
        };
      }
    render(){
        return(
            <div className="page app-page">
                <PullToRefresh
                    damping={150}
                    style={{
                    height:'500',
                    overflow: 'auto',
                    }}
                    indicator='下拉可以刷新' 
                    direction='down'
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                    this.setState({ refreshing: true });
                    }}
                    onRefresh={() => {
                        this.setState({ refreshing: false });
                        setTimeout(() => {
                          this.setState({ refreshing: false });
                        }, 1000);
                      }}
                    >
                    <Header/>
                    <Route component={List} />
                </PullToRefresh>
            </div>
        )
    }
}


          
      