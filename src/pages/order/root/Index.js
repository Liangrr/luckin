import React, { Component } from 'react'
import UI from './IndexUI'
import { connect } from 'react-redux'


class Index extends Component{
    render(){
        return <UI {...this.props}/>;
    }
}

const mapStateToProps = ({order})=>{
    return {
        title: order.title
    }
}

export default connect(mapStateToProps)(Index);

