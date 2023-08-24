import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Typography, Button } from "@mui/material";
import ConfirmationModal from "./ConfirmationModal";
import { useDispatch } from "react-redux";
import {
  deleteTodoThunk,
  toggleTodoCompletedThunk,
} from "../store/actions/todo-actions";

export const TodoItem = ({ id, title, date, completed, onEditClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTodoCompletedThunk(id));
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    try {
      dispatch(deleteTodoThunk(id));
      setIsModalOpen(false);
    } catch (error) {
      console.log(error, "Something went wrong while deleting a task!");
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const modalContent = isModalOpen ? (
    <ConfirmationModal
      open={isModalOpen}
      onClose={handleCancelDelete}
      onConfirm={handleConfirmDelete}
    />
  ) : null;

  return (
    <Box
      sx={{
        width: "90%",
        height: "6rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "25rem",
        border: "2px solid gray",
        borderRadius: "1rem",
        backgroundColor: "white",
        margin: "1.5rem",
      }}
    >
      <div>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle2" color={"darkgray"}>
          {date}
        </Typography>
      </div>
      <div>
        <Button variant="contained" onClick={handleToggleCompleted}>
          {completed ? "Uncompleted" : "Completed"}
        </Button>
        <Button
          sx={{ marginLeft: "1rem" }}
          onClick={() => onEditClick(id, title)}
        >
          Edit
        </Button>
        <Button
          sx={{ marginLeft: "1rem" }}
          color="error"
          variant="contained"
          onClick={handleDeleteClick}
        >
          Delete todo
        </Button>
      </div>
      {ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      )}
    </Box>
  );
};
