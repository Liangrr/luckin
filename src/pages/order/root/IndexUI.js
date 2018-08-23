import React from 'react'
import './Index.css'
import { NavBar } from 'antd-mobile';

export default (props)=>{
    return (
        <div className="page">
            <NavBar>{props.title}</NavBar>
        </div>
    )
}