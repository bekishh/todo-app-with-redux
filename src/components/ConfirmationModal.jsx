import React from "react";
import { Modal, Typography, Button, Box } from "@mui/material";

const ConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
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
            width: "18rem",
            height: "10rem",
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "1rem",
            border: "2px solid red",
          }}
        >
          <Typography variant="h6">Вы точно хотите удалить?</Typography>
          <div
            style={{
              display: "flex",
              gap: "3rem",
            }}
          >
            <Button onClick={onConfirm} color="error" variant="contained">
              Да
            </Button>
            <Button onClick={onClose} color="primary" variant="contained">
              Нет
            </Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal; 
