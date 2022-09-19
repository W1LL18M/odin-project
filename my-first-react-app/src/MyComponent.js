import React, { useState } from "react";

function MyComponent(props) {
    const [donut, setDonut] = useState(0);
    
    function incrementDonut() {
        setDonut(donut + 1);
        alert("I have eaten " + donut + " donuts");
    }

    return (
        <div>
            <h1>My name is {props.fname} {props.lname}</h1>
            <button onClick={props.buttonClicked}>Click Me!</button>
            <button onClick={incrementDonut}>Eat a donut</button>
        </div>
    );
}

export default MyComponent;