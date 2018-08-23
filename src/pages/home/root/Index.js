import React, { Component } from 'react'
import { connect } from 'react-redux'
import UI from './IndexUI'

class Index extends Component{
    render(){
        return <UI {...this.props}/>;
    }
}

const mapStateToProps = ({home})=>{
    return {
        title: home.title
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);