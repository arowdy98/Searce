import React, {Component} from "react";
import scene from "./scene.jpg";
import scene2 from "./scene2.jpg";

class NewComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Subscribe to Aditya",
            sub: "Subscribe",
            imgurl: scene
        };
    }

    styles ={
        fontStyle:"Italic",
        color: "purple"
      };

    buttonChange = () => {
        this.setState({
            message: "Hit the bell icon",
            sub: "Subscribed"
        })
    }

    imageChange = () =>{
        this.setState({
            message: "Thank you.",
            imgurl: scene2
        })
    }

    render(){
        return(
            <div>
                <h3 style = {this.styles}>
                    {this.state.message}
                </h3>
                <button onClick = {this.buttonChange}>{this.state.sub}</button>
                <p/>
                <img src = {this.state.imgurl} onClick= {this.imageChange}/>
            </div>
        );
    }
}

export default NewComp;