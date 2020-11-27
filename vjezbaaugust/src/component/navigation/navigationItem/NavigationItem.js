import React from 'react'
import classes from './navigationItem.css'
import {Link} from 'react-router-dom'
const NavigationItem = (props) => (
        <li className={classes.Nav}>
            <Link to={props.link}>{props.children}</Link>
        </li>
)
export default NavigationItem;