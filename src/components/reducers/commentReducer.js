const commentReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);
    case "DELETE_COMMENT":
        return state.filter((comment)=>comment.id !== action.id);
    case "EDIT_COMMENT":
        return state.map((comment)=>comment.id === action.id ? {...comment, editing: !comment.editing} :comment) 
    default:
      return state;
  }
};

export default commentReducer;
