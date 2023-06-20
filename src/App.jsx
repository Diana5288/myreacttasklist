import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { TaskModel } from "./models/taskmodel";

function App() {
  let misTareas = [
    new TaskModel(0, "First", false),
    new TaskModel(1, "Second", true),
    new TaskModel(2, "Third", true),
    new TaskModel(3, "fourth", false),
    ,
  ];
  let [tasks, setTask] = useState(misTareas);
  const handleComplete = function (id) {
    const modifiedState = tasks.map((task) => {
      if (task.id == id) {
        task.state = !task.state;
        return task;
      }
      return task;
    });
    setTask(modifiedState);
  };

  return (
    <>
      <div className="card-to-do">
        <Header titulo="Lista de Tareas" />
        <div className="counter todos">
          <h3>N° de tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
        </div>

        <TaskList handleComplete={handleComplete} taskList={tasks} />
      </div>
    </>
  );
}

export default App;
