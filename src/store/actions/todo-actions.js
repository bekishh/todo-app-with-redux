import axios from "axios";
import { BASE_URL } from "../../constants/general";

export const TODOS_ACTION_TYPES = {
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCES",
  TOGGLE_TODO_COMPLETED: "TOGGLE_TODO_COMPLETED",
};

export const TODO_FILTER_ACTION_TYPES = {
  SET_FILTER: "SET_FILTER",
};

const getTodosSuccesAction = (todos) => {
  return { type: TODOS_ACTION_TYPES.GET_TODOS_SUCCESS, payload: todos };
};

export const setFilterAction = (filter) => {
  return { type: TODO_FILTER_ACTION_TYPES.SET_FILTER, payload: filter };
};

export const openModal = (todoId) => {
  return {
    type: "OPEN_MODAL",
    payload: todoId,
  };
};

export const EDIT_TODO_TEXT = "EDIT_TODO_TEXT";

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

export const getTodosThunk = (sortOrder) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${BASE_URL}/todos.json`);
      const todosData = response.data;
      console.log(response);

      const sortedTodos = Object.entries(todosData).map(([key, todo]) => ({
        ...todo,
        id: key,
      }));
      sortedTodos.sort((a, b) => {
        if (sortOrder === "asc") {
          return new Date(a.date) - new Date(b.date);
        } else if (sortOrder === "desc") {
          return new Date(b.date) - new Date(a.date);
        }
        return sortedTodos;
      });
      dispatch(getTodosSuccesAction(sortedTodos));
    } catch (error) {
      console.log(error, "Something went wrong on fetching todos!");
    }
  };
};

export const deleteTodoThunk = (todoId) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(`${BASE_URL}/todos/${todoId}.json`);
      dispatch(getTodosThunk());
    } catch (error) {
      console.log(error, "Something went wrong while deleting a task!");
    }
  };
};

export const toggleTodoCompletedThunk = (todoId) => {
  return async (dispatch, getState) => {
    try {
      await axios.patch(`${BASE_URL}/todos/${todoId}.json`, {
        completed: true,
      });
      dispatch({
        type: TODOS_ACTION_TYPES.TOGGLE_TODO_COMPLETED,
        payload: todoId,
      });
    } catch (error) {
      console.log(error, "Something went wrong while switching tasks!");
    }
  };
};

export const editTodoText = (editTodoId, editedText) => {
  return async (dispatch, getState) => {
    try {
      await axios.patch(`${BASE_URL}/todos/${editTodoId}.json`, {
        title: editedText,
      });
      dispatch({
        type: EDIT_TODO_TEXT,
        payload: {
          editTodoId,
          editedText,
        },
      });
    } catch (error) {
      console.log(error, "Something went wrong while editing a task!");
    }
  };
};
