import React, { Fragment } from "react";



export function TodoItem({todo, cambiarEstado}) {
    const {id, task, completed} = todo;
    const fnCambiarEstado = () =>{
        cambiarEstado(id)
    }
    return(
        <Fragment>
            <li className="list-group-item d-flex justify-content-between">
                {task}
            <input type="checkbox" className="form-checked-input" checked={completed}
            onChange={fnCambiarEstado}
            />
            </li>
        </Fragment>
    )
}