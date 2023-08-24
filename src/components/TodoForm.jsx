import { Box, Button, TextField, styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { getTodosThunk } from "../store/actions/todo-actions";
import { BASE_URL } from "../constants/general";

function isValidDate(date) {
    return date instanceof Date && !isNaN(date)
}

export const TodoForm = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());

  const dispatch = useDispatch();

  const todoValueChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const dateChangeHandler = (date) => {
    if (isValidDate(date)) {
      setEnteredDate(date);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = format(enteredDate, "dd-MM-yyyy");
      const newTodo = {
        title: enteredTodo,
        date: formattedDate,
      };
      await axios.post(`${BASE_URL}/todos.json`, newTodo);
      dispatch(getTodosThunk());
      setEnteredTodo("");
      setEnteredDate(new Date());
    } catch (error) {}
  };

  const isSubmitDisabled = enteredTodo.trim().length === 0 || !enteredDate;

  return (
    <StyledBox component={"form"} onSubmit={submitHandler}>
      <TextField
        label="Enter todo"
        variant="outlined"
        value={enteredTodo}
        onChange={todoValueChangeHandler}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker value={enteredDate} onChange={dateChangeHandler} />
      </LocalizationProvider>
      <Button
        type="submit"
        variant="contained"
        className="submit"
        disabled={isSubmitDisabled}
      >
        Add
      </Button>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  "& > *": {
    flex: 1,
  },
  "& .submit": {
    maxWidth: 'max-content',
    padding: '1rem 2rem',
    borderRadius: '1rem'
  },
}));
