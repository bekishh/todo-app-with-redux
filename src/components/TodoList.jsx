import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import {
  closeModal,
  editTodoText,
  getTodosThunk,
  openModal,
} from "../store/actions/todo-actions";
import EditTodoModal from "./EditTodoModal";

export const TodoList = ({ filter, isClicked }) => {
  const { todos = [] } = useSelector((state) => state.todos);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEditClick = (todoId, title) => {
    dispatch(openModal(todoId));
    setEditTodoId(todoId);
    setEditedText(title);
  };

  const handleModalClose = () => {
    dispatch(closeModal());
    setEditTodoId(null);
    setEditedText("");
  };

  const handleEditSubmit = () => {
    if (editedText !== "") {
      dispatch(editTodoText(editTodoId, editedText));
      dispatch(closeModal());
      setEditTodoId(null);
      setEditedText("");
    }
  };

  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isClicked ? "darkblue" : "initial",
        borderRadius: "1rem",
      }}
    >
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onEditClick={() => handleEditClick(todo.id, todo.title)}
        />
      ))}
      <EditTodoModal
        isOpen={modal.isOpen}
        onModalClose={handleModalClose}
        editedText={editedText}
        onTextChange={setEditedText}
        onEditSubmit={handleEditSubmit}
      />
    </ul>
  );
};
