import React from "react";

const Task = () => {
  return (
    <form>
      <input
        type="text"
        className="imput add"
        name="description"
        value=" aprender programación"
        placeholder="¿que hay que hacer?"
      />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default Task;
