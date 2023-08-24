import { combineReducers } from "redux";
import { todosReducer } from "./todos-reducer";
import { todoFilterReducer } from "./todo-filter-reducer";
import modalReducer from "./modal-reducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  todoFilter: todoFilterReducer, 
  modal: modalReducer,
});
