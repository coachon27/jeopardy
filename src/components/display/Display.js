import React from "react";

function Display(props) {

    return (
    <div>
        <div>The answer is: {props.question}</div>
        <div>Category: {props.category}</div>
        <div>Value: {props.value}</div>
        <div><strong>Score:</strong> {props.score}</div>

        <div>
            <input
                type="text"
                name="userAnswer"
                value={props.userAnswer}
                onChange={props.handleChange}
            />
          
        <button onClick= {props.handleSubmit}>Submit Answer</button>
        </div>
    </div>
    )
}

export default Display;