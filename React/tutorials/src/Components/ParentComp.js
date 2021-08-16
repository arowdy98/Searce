import React, {Component} from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Adityam"
        };
    }

    componentDidMount(){
        setInterval(() => {this.setState({
            name: "Adyam"
        })}, 3000)
    }
    render(){
        console.log("Parent component rendered")
        return(
            <div>
                I am the Parent component.
                <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp;