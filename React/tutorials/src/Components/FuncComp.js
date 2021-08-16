import React from "react";

function FuncComp(props){
    return (
    <div>
        <h3> Functional component here.</h3>
        <h3>Hello {props.name} from {props.place} </h3>
    </div>);
}

export default FuncComp;