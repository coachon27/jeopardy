import React from "react";
import { useParams } from "react-router-dom";

function Welcome(props) {
    console.log(props.match.params.name)
        // let {name} = useParams() 
        let name = props.match.params.name || props.name
    return (
        <div className="Welcome">
          Welcome, {name}!
        </div>
    );
    
}


export default Welcome;
