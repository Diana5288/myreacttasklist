import React from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="card-to-do">
        <Header titulo="Lista de Tareas" />
        <div div className="counter todos">
          <h3>N° de tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <Task />
        </div>

        <TaskList />
      </div>
    </>
  );
}

export default App;
