import React, { useEffect, useState } from 'react'
import classes from './Continue.css'
import BackDrop from '../BackDrop/BackDrop'
const Continue = (props) => {

    return (
        <div>
            <div>
                <BackDrop Show={true} clicked={props.click} />
                <div className={classes.Continue}>
                    <div style={{ padding: '30px' }}>{props.text}</div><br />
                    <div style={{ paddingBottom: '120px' }}><span style={{ color: 'green' }}>{props.naslov.title}</span></div><br />
                    <div>
                        <button className={classes.Button} style={{ backgroundColor: 'red' }} onClick={props.click}>Prekini</button>
                        <button className={classes.Button} style={{ backgroundColor: 'green' }} onClick={props.Send}>Nastavi</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Continue;