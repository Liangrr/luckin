import React from 'react'
import { NavBar } from 'antd-mobile';
import './Index.css'

export default (props)=>{
    return (
        <div className="page">
            <NavBar>{props.title}</NavBar>
        </div>
    )
}