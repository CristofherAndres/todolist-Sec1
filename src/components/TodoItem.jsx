import React, { Fragment } from "react";



export function TodoItem({todo}) {
    const {task} = todo;
    return(
        <Fragment>
            <li className="list-group-item">{task}</li>
        </Fragment>
    )
}