import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import uuid4 from "uuid4";

export const TodoList = () => {
  /* Se usara el Hook USESTATE */
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1 🍕", completed: true },
    { id: 2, task: "Tarea 2 😶‍🌫️", completed: false },
    { id: 3, task: "Tarea 3 🍔", completed: true },
    { id: 4, task: "Tarea 4 🍟", completed: false },
    { id: 5, task: "Tarea 5 🍿", completed: true },
  ]);

  const nuevaTarea = () => {
    const tarea = taskRef.current.value.trim();
    taskRef.current.value = null;
    if (tarea === "") return;

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid4(),
        task: tarea,
        completed: false,
      };
      return [...prevTodos, newTask]; //Tarea investigar
    });
  };

  const contadorTareas = () => {
    //Cuenta todas las tareas que aun no se realizan
    return todos.filter((todo) => !todo.completed).length;
  };

  /* Componente que indique la cantidad de tareas pendientes */
  const ResumenTarea = () => {
    const cantTareas = contadorTareas();

    if (cantTareas === 0) {
      return (
        <div className="alert alert-success mt-3 text-center">
          Felicidades no te quedan tareas pendientes 😊
        </div>
      );
    }
    if (cantTareas === 1) {
        return (
          <div className="alert alert-info mt-3 text-center">
            Te queda 1 tarea pendiente
          </div>
        );
      }
      if (cantTareas > 9) {
        return (
          <div className="alert alert-danger mt-3 text-center">
            Te quedan {cantTareas} tareas pendientes 😮
          </div>
        );
      }
      return (
        <div className="alert alert-warning mt-3 text-center">
          Te quedan {cantTareas} tareas pendientes
        </div>
      );
  };

  const cambiarEstadoTarea = (id) => {
    /* Tomar todos los elementos del array */
    const newTodos = [...todos];
    /* Buscar el elemento que se quiere cambiar */
    const todo = newTodos.find((todo) => todo.id === id);
    /* Cambiar estado */
    todo.completed = !todo.completed;
    /* Setear el array y retornar */
    setTodos(newTodos);
  };
  const taskRef = useRef();

  return (
    <Fragment>
      <h1 className="display-5">Lista de tareas ✔️😊</h1>

      {/* Formulario para tareas */}
      <div className="input-group my-4">
        <input
          type="text"
          placeholder="Ingresa una tarea"
          className="form-control"
          ref={taskRef}
        />
        <button className="btn btn-success ms-2" onClick={nuevaTarea}>
          <i className="bi bi-folder-plus" ></i>
        </button>
        <button className="btn btn-danger ms-2">
          <i className="bi bi-trash" ></i>
        </button>
      </div>

      <ul className="list-group mt-5">
        {/* Recorrer la lista */}
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            cambiarEstado={cambiarEstadoTarea}
          />
        ))}
      </ul>

      {/* llamamos al resumen de tareas */}
      <ResumenTarea />
    </Fragment>
  );
};
