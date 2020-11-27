import React from 'react'
import classes from './BackDrop.css'
const BackDrop=(props)=>{
    let Show=null;
    if(props.Show)
    {
        Show=
        (<div className={classes.BackDrop} onClick={props.clicked}></div>)
    }
    return(
        <div>
        {Show}
        </div>
    )
}
export default BackDrop;