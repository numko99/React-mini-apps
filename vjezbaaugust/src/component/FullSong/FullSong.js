import React, { Component } from 'react'
import classes from './FullSong.css'
import axios from 'axios'
import Continue from '../Continue/Continue'
import {withRouter} from 'react-router-dom'

class FullPost extends Component {

    state = {
        fullsong: null,
        skrol: false,
        Continue: false
    };
    componentDidMount() {

        this.loadedPost();
        window.addEventListener('scroll', this.HandleScroll);

    }
    componentDidUpdate() {

        this.loadedPost();
    }
    HandleScroll = () => {
        const offset = window.scrollY;
        if (offset > 122) {
            this.setState({ skrol: true })
        } else {
            this.setState({ skrol: false })
        }
console.log(offset);

    }
    Zatvori = () => {
        this.props.history.push('/posts');
    }
    loadedPost() {
        if (this.props.match.params.idd) {
            if (!this.state.fullsong || this.state.fullsong.id != this.props.match.params.idd) {

                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.idd).then(x => {

                    this.setState({
                        fullsong: x.data
                    });
                })
            }
        }
        this.Otvori = () => {
            // axios.post("https://test-app-97956.firebaseio.com/FullSongs.json", this.state.fullsong).then(response => {
            //     this.props.history.push("/posts")
            // })
            this.setState({ Continue: true })
        }

        this.Posalji = () => {
            axios.post("https://test-app-97956.firebaseio.com/FullSongs.json", this.state.fullsong).then(response => {
                this.props.history.push("/posts")
            })
           
        }
        this.ZatvoriBackdrop =()=>{
            this.setState({Continue:false});
        }
    }


render() {

    var klasa=classes.TopSkrol;
    
    if (this.state.skrol || window.scrollY > 197) {
       
        klasa=classes.MiddleSkrol;
    }
    let song = 'Loading...'
    if (this.state.fullsong) {
        song = (

            <div className={`${klasa} ${classes.FullPost}`} >
                <span className={classes.xButton} onClick={this.Zatvori}>X</span>
               <div className={classes.Middle}>
                <h1>{this.state.fullsong.title}</h1>
                </div>
                <div className={classes.Middle}>
                <h2>{this.state.fullsong.body}</h2>
                </div>
                <div style={{marginTop:'90px'}}>
                <h3>{this.state.fullsong.id}</h3>
                </div>
                <div style={{ margin: 'auto' }}>
                    <button className={classes.Button} onClick={this.Otvori}>Save</button>
                </div>

            </div>

        )
    }
    let con = null;
    if (this.state.Continue) {
        con = <Continue naslov={this.state.fullsong} click={this.ZatvoriBackdrop} Send={this.Posalji} text='Are you sure that u want to save to u profile this song?'/>
    }
    
    return (
        <div style={{ width: '100%' }}>
            {con}
            {song}
        </div>
    )
}
}
export default FullPost;