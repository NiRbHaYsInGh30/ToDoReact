import React, { useState } from "react";

export const EdiTodoForm = ({ editTodo,task }) => {
  const [value, setvalue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value)
    editTodo(value,task.id );

    setvalue(""); //To remove the value after submitting
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Updated Task"
          onChange={(e) => setvalue(e.target.value)}
        ></input>
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
};

// export default EditTodoForm;
