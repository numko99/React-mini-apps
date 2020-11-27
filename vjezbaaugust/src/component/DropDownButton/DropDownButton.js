import React from 'react'
import classes from './DropDownButton.css'


const DropDownButton=(props)=>(
    <div className={classes.DropDownButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default DropDownButton;