import React from 'react'
import classes from '../Search/Search.css'
const Search = (props) => {
    const nesto=()=>{
        console.log("admir");
    }
    
    return (
        <div className={classes.bla}>
            <form>
            <input type="text" placeholder="Search" style={{ width: "200px", padding: "5px",borderRadius:'10px'}} onChange={props.Change}  />
            {/* <input type="submit" value="Trazi" style={{padding:'3px',width:'50px'}} /> */}
            </form>
        </div>

    )
}
export default Search