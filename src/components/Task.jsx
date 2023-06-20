import { useState } from "react";
import { BsCheckCircle, BsCheckCircleFill, BsPencil } from "react-icons/bs";
import { TaskModel } from "../models/taskmodel";
const Task = ({ task, handleComplete, handleEdit }) => {
  const { id, description, state } = task;

  const [taskName, setTaskName] = useState(description);
  const [editMode, setEditMode] = useState(false);

  const myForm = (
    <form onSubmit={() => onEdit()}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Editar</button>
    </form>
  );

  const onEdit = () => {
    const myNewTask = new TaskModel(id, taskName, state);
    handleComplete(myNewTask);
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? myForm : <h1>{description}</h1>}
      <p>task number {id}</p>
      <button onClick={() => handleComplete(id)}>
        {state ? <BsCheckCircleFill /> : <BsCheckCircle />}
      </button>
      <button onClick={() => setEditMode(!editMode)}>
        <BsPencil />
      </button>
    </li>
  );
};

export default Task;
