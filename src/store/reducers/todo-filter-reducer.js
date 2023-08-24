import { TODO_FILTER_ACTION_TYPES } from "../actions/todo-actions";


const initialState = "all";

export const todoFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_FILTER_ACTION_TYPES.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
