import React, { Component } from 'react'
import classes from '../TestButton/TestButton.css'
class TestButton extends Component {
    state={
        vrijednost : 0
    }
    render() {
        let vrijednost=<span style={{margin : '20px',color:'white'}}>{this.props.vrijednost}</span> 
        return (
            <div className={classes.TestButton}>
                {vrijednost}
                <button className = {classes.Button}style={{backgroundColor : 'green'}} onClick={this.props.Povecaj}>Povecaj</button>
                <button className = {classes.Button} style={{backgroundColor:'red'}} onClick={this.props.Umanji}>Umanji</button>

            </div>
        )
    }
}
export default TestButton