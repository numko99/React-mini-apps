import React, { Component } from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import DropDownButton from '../../DropDownButton/DropDownButton'
import Search from '../Search/Search'
import { render } from 'react-dom'


class Toolbar extends Component 
{

     Pretraga= (naslov)=>{
        //  this.props.history.push({pathname: '/'+naslov});

        console.log(this.props.match);
            
       
    }
        render(){
        return (
            <header className={classes.Nav}>
                <DropDownButton clicked={this.props.OpenSideDraw} />
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav><NavigationItems /></nav>
               
               {/* <Search Change={(event)=>{Pretraga(event.target.value)}}/> */}
            </header>
        )
        }
}
export default Toolbar;