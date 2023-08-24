import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [filter, setFilter] = useState("all");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleHeaderClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSortOrderChange = (sortOrder) => {
    navigate(`/?sort=${sortOrder}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Header onClick={handleHeaderClick} isClicked={isClicked} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Typography variant="h3" textAlign={"center"}>
          Todo App
        </Typography>
        <select onChange={handleFilterChange} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleSortOrderChange("asc")}
          >
            ASC
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSortOrderChange("desc")}
          >
            DESC
          </Button>
        </div>
      </div>

      <TodoForm />
      <TodoList filter={filter} isClicked={isClicked} />
    </div>
  );
}

export default App;
