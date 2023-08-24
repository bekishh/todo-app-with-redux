import React from "react";
import { Modal, Button, Box, TextField } from "@mui/material";

const EditTodoModal = ({
  isOpen,
  onModalClose,
  editedText,
  onTextChange,
  onEditSubmit,
}) => {

  const handleEditSubmit = () => {
    onEditSubmit();
    onModalClose();
  };

  return (
    <Modal open={isOpen} onClose={onModalClose}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "20rem",
            height: "15rem",
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "2px solid black",
          }}
        >
          <h2>Edit Todo</h2>
          <TextField
            variant="outlined"
            label="Enter todo"
            type="text"
            value={editedText}
            onChange={(e) => onTextChange(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              gap: "3rem",
            }}
          >
            <Button variant="contained" onClick={handleEditSubmit}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={onModalClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTodoModal;
