import React from 'react'
import classes from './divi.css'
import axios from  'axios'
const Song = (props) => {
    let dugme=null;
    var Cursor='pointer';
    if(props.dugme)
    {
        dugme=<button onClick={props.Obrisi}>{props.dugme}</button>
        Cursor=null;
    }
    return (
        <div className={classes.abc} style={{cursor:Cursor}} onClick={props.clicked}>
            <div className={classes.Body}>
                <div className={classes.title}>
            <h1>{props.title}</h1>
            </div>
            <div className={classes.Middle}>
            <h2>{props.body}</h2>
            </div>
            </div>
            
              {dugme}
             
              
             
       </div>
    )
}
export default Song