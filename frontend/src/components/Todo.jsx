import { useState, Fragment } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

import Done from "../assets/done.png";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);

  console.log(todo.createdAt);
  let d = new Date(todo.createdAt);
  console.log(d);

  let dte = d.toLocaleString();

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };

  const editTodo = () => {
    dispatch(toggleTodo(todo._id));
    setEditing((prevState) => !prevState);
  };

  const toggleDone = () => {
    dispatch(toggleTodo(todo._id));
  };

  return (
    <>
      <li
        className="task"
        onClick={editing ? () => {} : toggleDone}
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          backgroundColor: todo?.done ? "#bdc3c7" : "#537597",
        }}
        data-testid="todo-test"
      >
        <div style={{ display: editing ? "none" : "" }}>{todo?.data}</div>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <img
          src={Delete}
          alt="X"
          className="icon"
          onClick={() => dispatch(deleteTodo(todo._id))}
        />

        <img
          style={{ display: editing ? "inline" : "none" }}
          onClick={onFormSubmit}
          src={Done}
          alt="+"
          className="icon done"
        />

        <img
          style={{ display: editing ? "none" : "inline" }}
          src={Edit}
          alt="/"
          className="icon edit"
          onClick={editTodo}
        />
      </li>
      <p
        className="date"
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          backgroundColor: todo?.done ? "#bdc3c7" : "#537597",
        }}
      >
        {dte}
      </p>
    </>
  );
};

export default Todo;
