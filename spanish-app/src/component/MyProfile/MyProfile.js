import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Song from '../Song/Song';
import classes from './MyProfile.css'
import Continue from '../Continue/Continue'
import {withRouter} from 'react-router-dom'
const MyProfile=(props)=>{
    const [state,setstate]=useState({
        songs : [],
      
    })

    const [stateKLIKID,setstateKLIKID]=useState({
        klikID : null
      
    })
    useEffect(()=>{
        axios.get('https://test-app-97956.firebaseio.com/FullSongs.json').then(response=>{
        setstate({songs:response.data});
      
        })
    },[])
    const Posalji=(id)=>{
        // var niz=Object.keys(state.songs);
        // console.log("asdadsada");
        // axios.get('https://test-app-97956.firebaseio.com/FullSongs.json').then(response=>{
        //     console.log(response.data)
       
        // })
        setstateKLIKID({klikID:id})
        console.log("...........");
        console.log(id);
      
    }
    const Obrisi=()=>{
        console.log("obrisano");
        props.history.push('/MyProfile')
        setstateKLIKID({klikID:null})
        //potrebna implementacija za brisanje iz firebase baze

    }
    const ZatvoriBackdrop=()=>{
        setstateKLIKID({klikID : null})
    }
    let pjesme=null;
    if(state.songs){
     pjesme=Object.keys(state.songs).map((x,i)=>{
        return (
            <Song
                key={i}
                title={state.songs[x].title}
                body={state.songs[x].body}
                dugme='Obrisi'
                Obrisi={()=>Posalji(i)}
            />   
        )
    })
}


   var check=null;
   
   if(stateKLIKID.klikID || stateKLIKID.klikID==0)
   {    
   var niz=Object.keys(state.songs);    
   check=<Continue naslov={state.songs[niz[stateKLIKID.klikID]]} click={ZatvoriBackdrop} Send={Obrisi} text='Are you sure that u want to delete this song?'/>

   } else {
       check=null;
   }
    return(
       <div className={classes.Divi}>
          {check}
           {pjesme}
       </div>
    )
}

export default withRouter(MyProfile)