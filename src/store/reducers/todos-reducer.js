import { EDIT_TODO_TEXT, TODOS_ACTION_TYPES } from "../actions/todo-actions";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.GET_TODOS_SUCCESS:
      const transformedTodos = Object.entries(action.payload).map(([key, todo]) => {
        return { ...todo, id: key };
      });
      return {
        ...state,
        todos: transformedTodos,
      };
    case TODOS_ACTION_TYPES.TOGGLE_TODO_COMPLETED:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
      case EDIT_TODO_TEXT:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.editTodoId
              ? { ...todo, title: action.payload.editedText }
              : todo
          ),
        };
    default:
      return state; 
  }
};
