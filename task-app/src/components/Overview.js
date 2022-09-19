import React from "react";

function Overview(props) {
    return(
        <ul>
            {props.tasklist.map(task => {
                return <li>{task}</li>;
            })}
        </ul>
    );
}

export default Overview;