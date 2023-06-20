import Task from "./Task";

const TaskList = ({ taskList, handleComplete, handleEdit }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <Task
          handleComplete={handleComplete}
          key={task.id}
          task={task}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};
export default TaskList;
