import React, { Component } from 'react'
import Song from '../Song/Song'
import axios from 'axios'
import classes from './Songs.css'
import Search from '../navigation/Search/Search'
import FullSong from '../FullSong/FullSong'
import { Route } from 'react-router-dom'
import Test from '../Test/Test'
import Continue from '../Continue/Continue'
class Songs extends Component {
    state = {
        posts: [],
        findposts: [],
        klik : true,
        Continue:null

    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const post = response.data.slice(0, 25);
            this.setState({
                posts: post,
                findposts: post,
                klik:true
               
            });

        });

    }
    PrikaziNesto = (id) => {
        this.props.history.push({ pathname: this.props.match.url + '/' + id });
        this.setState({klik:false})
        
    }
    Pretraga = (ime) => {
        var postss = this.state.posts.filter(x => {
            return x.title.startsWith(ime)
        })
        this.setState({
            findposts: postss
        })

    }
    render() {
    
        let posts = <h1 style={{ color: "white" }}>'Loading...';</h1>
        posts = this.state.findposts.map((post) => {
            return (

                <Song
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    footer='admir'
                    clicked={() => this.PrikaziNesto(post.id)}
                />
          )
        })
    
        return (
            <div>
                <div className={classes.search}>
                <Search style Change={(event) => this.Pretraga(event.target.value)} />
                </div>
              
                <div className={classes.wrap}>
                    <div className={classes.Divi}>
                        {posts}
                    </div>
                        <Route path={this.props.match.url + '/:idd'} exact component={FullSong} />
                        {/* <Route path={this.props.match.url}  component={<Test vrijednost={1}/>} /> */}
                   
                </div>
                {/* <Test /> */}

            </div>
        )
    }

}
export default Songs;