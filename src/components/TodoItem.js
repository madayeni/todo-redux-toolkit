import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const toggle = (idd) => {
    dispatch(toggleComplete({ id: idd }));
  };

  const handleDelete = (idd) => {
    dispatch(deleteTodo({ id: idd }));
  };
  return (
    <li>
      <div>{title}</div>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <input type="checkbox" checked={completed} onChange={() => toggle(id)} />
    </li>
  );
};

export default TodoItem;
