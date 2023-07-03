import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import uuid4 from "uuid4";



export const TodoList = () =>{
/* Se usara el Hook USESTATE */
    const [todos, setTodos] = useState([
        {id:1, task: 'Tarea 1 🍕', completed: true},
        {id:2,task: 'Tarea 2 😶‍🌫️', completed: false},
        {id:3,task: 'Tarea 3 🍔', completed: true},
        {id:4,task: 'Tarea 4 🍟', completed: false},
        {id:5,task: 'Tarea 5 🍿', completed: true}
    ])

    const nuevaTarea = () =>{
        const tarea = taskRef.current.value.trim();
        taskRef.current.value = null
        if (tarea === '') return
        
        setTodos((prevTodos) => {
            const newTask = {
                id: uuid4(),
                task: tarea,
                completed: false
            }
            return[...prevTodos, newTask] //Tarea investigar
        })
    } 

    const cambiarEstadoTarea = (id) =>{
        /* Tomar todos los elementos del array */
        const newTodos = [...todos]
        /* Buscar el elemento que se quiere cambiar */
        const todo = newTodos.find((todo)=> todo.id===id)
        /* Cambiar estado */
        todo.completed = !todo.completed
        /* Setear el array y retornar */
        setTodos(newTodos)
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
                <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea}/>
            ))}
        </ul>
        
        
        </Fragment>
    )
}