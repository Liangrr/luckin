import React, { Component } from 'react'
import UI from './IndexUI'
import {connect} from 'react-redux'

class Index extends Component{
    render(){
        return <UI/>
    }
}

const mapStateToProps = ({mine})=>{
    return {
        title: mine.title
    }
}

export default connect(mapStateToProps)(Index);