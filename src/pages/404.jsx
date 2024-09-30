import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <>
        <h2 className="title">
            sorry but this page not found
        </h2>
        <button style={{margin:' 0 auto' ,width:'max-content',display:'block'}} className="general"><Link to='/'>Back To Home Page</Link></button>
        </>
    )
}