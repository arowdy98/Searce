import React from "react";

export class ClassComp extends React.Component{
    render(){
        return (
        <div>
            <h1>{this.props.name} from {this.props.place}, This is class component.</h1>
            <p>{this.props.children}</p>
            </div>)

    }
}

export class ClassComp1 extends React.Component{
    render(){
        return <h1> This is another class component.</h1>
    }
}