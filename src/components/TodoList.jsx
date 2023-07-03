import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";



export const TodoList = () =>{
/* Se usara el Hook USESTATE */
    const [todos, setTodos] = useState([
        {id:1, task: 'Tarea 1 🍕'},
        {id:2,task: 'Tarea 2 😶‍🌫️'},
        {id:3,task: 'Tarea 3 🍔'},
        {id:4,task: 'Tarea 4 🍟'},
        {id:5,task: 'Tarea 5 🍿'}
    ])

    const nuevaTarea = () =>{
        const tarea = taskRef.current.value;
        alert(tarea)
    } 
    const taskRef = useRef()

    return(
        <Fragment>
        
        <h1 className="display-5">Lista de tareas ✔️😊</h1>
        
        {/* Formulario para tareas */}
        <div className="input-group my-4">
            <input type="text" placeholder="Ingresa una tarea" className="form-control" ref={taskRef}/>
            <button className="btn btn-success ms-2"> <i className="bi bi-folder-plus" onClick={nuevaTarea}></i></button>
        </div>

        <ul className="list-group mt-5">
            {/* Recorrer la lista */}
            {todos.map((todo)=>(
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </ul>
        
        
        </Fragment>
    )
}