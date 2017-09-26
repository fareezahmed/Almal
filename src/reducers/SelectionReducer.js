export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'selected_deal':
      return action.payload;
    default:
      return state;
  }
};
