import React from 'react'
import classes from './SideBar.css'
import BackDrop from '../../BackDrop/BackDrop'
import Logo from '../../Logo2/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const SideBar = (props) => {
    let Classes = [classes.SideBar, classes.Close];
    if (props.open) {
        Classes = [classes.SideBar, classes.Open]
    }
    return (
        <div>
            <BackDrop Show={props.open} clicked={props.Close} />
            <div className={Classes.join(' ')}>
                <div className={classes.Logo}>
                   <Logo/>   
                </div>
                <nav><NavigationItems/></nav>
            </div>
        </div>
    )
}
export default SideBar;