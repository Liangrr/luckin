import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// 页面
import Home from './pages/home/root/Index'
import Menu from './pages/menu/root/Index'
import Order from './pages/order/root/Index'
import Car from './pages/car/root/Index'
import Mine from './pages/mine/root/Index'

// tabs
import Tabs from './common/tabs/Tabs'

// 引入首页的子页面
import Company from './pages/home/list/listchilds/company'
import Sendtype from './pages/home/list/listchilds/sendType'
import Wallet from './pages/home/list/listchilds/wallet'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* 重定向 */}
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/home/sendtype" component={Sendtype}/>
          <Route path="/home/company" component={Company}/>
          <Route path="/home/wallet" component={Wallet}/>

          <Route path="/menu" component={Menu}/>
          <Route path="/order" component={Order}/>
          <Route path="/car" component={Car}/>
          <Route path="/mine" component={Mine}/>
          
          {/* 匹配所有 */}
          {/* <Route component={Tabs}/> */}
          {/* <Route path="/" component={Tabs}/> */}
          <Route children={({history})=>{
            return <Tabs history={history}/>
          }}/>

        </div>
      </Router>
    );
  }
}

export default App;
