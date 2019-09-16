const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGES':
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};
export default messagesReducer;
