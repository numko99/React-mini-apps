import React, { Component } from 'react';
import classes from './Main.css'
import Songs from '../component/Songs/Songs'
import FullSong from '../component/FullSong/FullSong'
import {Route,Switch} from 'react-router-dom'
import Checkout from '../component/Checkout/Checkout';
import MyProfile from '../component/MyProfile/MyProfile';
class Main extends Component {
    render() {
        
        return (
            <div className={classes.Main}>
              <Route path="/posts" component={Songs}/> 
              <Route path="/checkout" component={Checkout}/>
              <Route path="/MyProfile" component={MyProfile}/>

              {/* <Route path="/posts/:id" exact component={FullSong} /> */}
                <Switch>
              {/* <Route path="/:naslov" exact component={Songs}/>  */}

              </Switch>
              
               
            </div>
        )
    }
}
export default Main
