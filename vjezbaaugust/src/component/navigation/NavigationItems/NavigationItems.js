import React from 'react'
import NavigationItem from '../navigationItem/NavigationItem';
import classes from './NavigationItems.css'
const NavigationItems = () => (
        <ul className={classes.Nav}>
            <NavigationItem link='/posts'>Home </NavigationItem>
            <NavigationItem link='/MyProfile'>MyProfile</NavigationItem>
            <NavigationItem link='/About us'>About us</NavigationItem>

        </ul>
)
export default NavigationItems;