import React, { Component } from 'react'
import TestButton from '../TestButton/TestButton'
import {withRouter} from 'react-router-dom'
class Test extends Component {
    state = {
        mjera : {
            admir: 0,
            dalila: 0,
            mesa: 0,
            jasko: 0
        }
    }

    Povecaj = (i) => {

        let a=this.state.mjera;
        a[i]+=1;

        this.setState(() => ({
         mjera : a
        }));
    }
    Umanji = (i) => {
        if(this.state.mjera[i]!==0){
        let a=this.state.mjera;
        a[i]-=1;

        this.setState(() => ({
         mjera : a
        }));
    }
    }
   Posalji=()=>{
       var queryParams=[];
       for(var i in this.state.mjera)
       {
        //    console.log(i);
        //    console.log(encodeURIComponent(i));
           queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.mjera[i]));
       }
         var querysrting = queryParams.join('&');
       this.props.history.push({
           pathname : '/checkout',
            search : '?'+querysrting
        });
   }
    render() {

        var nesto = Object.keys(this.state.mjera).map((x, i) => {
            return (
                <div  key={i}>
                    <TestButton
                    vrijednost={this.state.mjera[x]}
                    Povecaj={() => { this.Povecaj(x) }}
                    Umanji={() => { this.Umanji(x) }} />
                </div>
            )
        })
        return (
            <div style={{width : 'max-content',margin:'auto'}}>
                {nesto}
                <div style={{width: 'max-content',margin:'auto'}}>
                <button style={{padding:'10px'}}  onClick={this.Posalji}>SUBMIT</button>
                </div>
            </div>

        )
    }
}
export default withRouter(Test);