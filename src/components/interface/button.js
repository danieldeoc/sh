import React from "react";

function Button(props){
    return( 
        <button type={props.type} className={`btn ${props.className}`} onClick={props.clickHandler}>{props.text}</button>
    )
}

export default Button;