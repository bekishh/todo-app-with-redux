import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


export const Header = ({ onClick, isClicked }) => {
  const todos = useSelector((state) => state.todos.todos);

  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <header
      className={`headerContainer ${isClicked ? "darkblueBackground" : ""}`}
    >
      <div>
        <Typography
          className={` ${isClicked ? "darkModeTypeogtaphs" : ""}`}
          variant="h5"
        >
          Всего: {todos.length}
        </Typography>
        <Typography
          className={` ${isClicked ? "darkModeTypeogtaphs" : ""}`}
          variant="h5"
        >
          Выполненные: {completedTodos.length}
        </Typography>
        <Typography
          className={` ${isClicked ? "darkModeTypeogtaphs" : ""}`}
          variant="h5"
        >
          Невыполненные: {uncompletedTodos.length}
        </Typography>
      </div>
      <img
        src={
          isClicked
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nO2Zy2oUURCGD7lgDBNEScSFujfmFYwYN4KgIvEhkjDeNuJGXMW9PoG3BzGzFKITxcu4cSe6EQ3e0U8K/4GZY5yZc7r7TEf6h4bhTFfV//eprqlT41yFChWGCuAB8NBtdyC47Q4qISVD6XYE2ANMpBICjAO7Q+0GEfEJaAIzRQsBZoBHwAdgVzDhHo53AI/FaSNEDNAA1gJFbCiWxRyPJj5AgOfAvlwD/B3jWRExCheTTESPrQ8uAD7MR2zq5iHGAn/2gwIjwDxwU+3JG+CtPt8Cjtg9ns1e4It8phHhPcVpb+0osE5/2D3znu10HrubGcBV4JeIWpk+D8wCk7pmtdZOS7v3iisTgOsi9xVY8lNni9RbBr7J5porA4CTerom4liA3YLE/AROFMuyD4Ax4KWe7FKE/UpHKR9zwwKw2FEyRyLsR4En8nG2GJaDEbkvEvUMPi7Kx+182YWRaInEoQw+DsvHizyJ1YDXPep/w7t/U+u1DDGn5ONjLI8YIV1drAXX+lRiIWux8f5Fol2xZjP4mMs9tTK87Bcy+LgsH3fcsACcEwkroaOR5fepfCwWw3Lwc/UrEVmOsK/LtpX7STAUwBmRsXZjIcDuuGysvTnlygDgRoeYlV5ppnSqdzSNq64s4E9H2xaD8v6SKlJN15zW2u+E7cRqTGtTRMM46a2d7vi174WWn0429iH1e6Kjrp3y3vmnOhUAaybvqavd1GUDhbv6rouwdux90qOuN3xYz6P9lngbyKUZPhQ5skkxN0s2d6JoMRoeNGO2PvQfK7rFWMyd0cS3cH4A+JF4iN0EvgP7gwn3cX4w8d8KExbTlQWxQkqHSkjZ8D/tSCP3M3aFChVcKH4DW1NFx8NweQsAAAAASUVORK5CYII"
            : "https://cdn-icons-png.flaticon.com/512/37/37857.png"
        }
        alt="icon"
        className="icons"
        onClick={onClick}
      />
    </header>
  );
};
