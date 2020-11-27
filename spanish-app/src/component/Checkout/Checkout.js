import autoprefixer from 'autoprefixer';
import React, { useEffect,useState } from 'react'
import { render } from 'react-dom';
import classes from '../Checkout/Checkout.css'
import queryString from 'query-string'
const Checkout=(props)  =>{
    const[ stat, setstate] =useState( {
        mjera: {
            admir: 0,
            dalila: 0,
            mesa: 0,
            jasko: 0
        }
    })
    useEffect(()=> {
        // var query = new URLSearchParams(this.props.location.search);
        // let mjeraa = {};
        // for (let i of query.entries()) {

        //     mjeraa[i[0]] = +i[1];
        // }
        // this.setState({
        //     mjera: mjeraa
        // })
        //prvi nacin
         var query=queryString.parse(props.location.search);
        
        setstate({mjera : query})
      
        //drugi nacin
    },[])
       
            var admir = Object.keys(stat.mjera).map((x, i) => {
                return (
                    <div key={i} className={classes.Element}>
                        <span>{x}={stat.mjera[x]}</span>
                    </div>
                )
            })
          
            return (
                <div className={classes.Checkout}>
                    <div style={{width : 'max-content',margin : 'auto'}}>
                    {admir};
                    </div>
                    
                </div>
            )
        }

    

    export default Checkout;