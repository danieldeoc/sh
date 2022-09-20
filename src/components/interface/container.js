import React from "react";

function Container(props){
    return(
        <div className={`container ${props.type}`}>{props.children}</div>
    )
}

export default Container;