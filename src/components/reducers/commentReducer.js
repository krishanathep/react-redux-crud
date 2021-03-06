const commentReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);
    case "DELETE_COMMENT":
      return state.filter((comment) => comment.id !== action.id);
    case "EDIT_COMMENT":
      return state.map((comment) =>
        comment.id === action.id
          ? { ...comment, editing: !comment.editing }
          : comment
      );
    case "UPDATE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            title: action.data.newtitle,
            message: action.data.newmessage,
            name: action.data.newname,
            editing: !comment.editing,
          };
        } else return comment;
      });

    default:
      return state;
  }
};

export default commentReducer;
