import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Add todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
