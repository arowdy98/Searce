import React, {Component} from "react";

export class RegComp extends Component{
    render(){
        console.log("Regular Component Render")
        return(
            <div>
                I am the regular component {this.props.name}.
            </div>
        )
    }
}

export default RegComp;