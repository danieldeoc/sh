import React from "react";

function Box(props){
    return(
        <div className="box" style={props.style}>{props.children}</div>
    )
}
export default Box;