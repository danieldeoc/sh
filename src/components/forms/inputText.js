import React, { useRef, forwardRef } from "react";

const InputText = forwardRef((props, ref) => {
    return(
        <div className="inputContainer">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                id={props.id} 
                name={props.name}
                value={props.value}
                onChange={props.changeHandler}
                placeholder={props.placeholder}
                ref={ref} />
        </div>
    )
})
export default InputText;