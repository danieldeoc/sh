import React from "react";

function PadBox(props){
    return(
        <div className={`padBox ${props.type}`}>{props.children}</div>
    )
}
export default PadBox;