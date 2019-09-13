const currentUserReducer = (state, action) => {
  if (state === undefined) {
    return "Anonymousse";
  }

  switch (action.type) {
    case '':
      return action.payload;
    default:
      return state;
  }
};
export default currentUserReducer;
