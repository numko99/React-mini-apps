import React,{Component} from 'react'
import classes from './Layout.css'
import Toolbar from '../navigation/Toolbar/Tollbar'
import SideBar from '../navigation/SideBar/SideBar'
import Router from 'react-router-dom'
class Layout extends Component{
state={
    openSideDraw:false
}
SideDraw=()=>{
    this.setState((prevState)=>{
       return { openSideDraw:!prevState.openSideDraw}
    })
}

CloseBackDrop=()=>{
    this.setState({openSideDraw:false})
}
    render()
    {
      
        return(
            <div>
                <Toolbar OpenSideDraw={this.SideDraw}/>
                <SideBar open={this.state.openSideDraw} Close={this.CloseBackDrop}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;
