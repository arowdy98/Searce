import React, {PureComponent} from "react";
import UpdatedComp from "./HigherOrder";

class PureComp extends PureComponent{
    render(){


        console.log("Pure Comp render")
        return(
            <div>
                I am the Pure Component {this.props.name}.
            </div>
        )
    }
}

export default PureComp;