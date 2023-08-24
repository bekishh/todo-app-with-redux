const initialState = {
    isOpen: false,
    todoId: null,
  };
  
  const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return {
          isOpen: true,
          todoId: action.payload,
        };
      case "CLOSE_MODAL":
        return {
          isOpen: false,
          todoId: null,
        };
      default:
        return state;
    }
  };
  
  export default modalReducer;