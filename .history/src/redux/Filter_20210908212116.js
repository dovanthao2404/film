const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      let temp = { ...state };
      state = temp;
      console.log(state)
      return state;
    default:
      return state;
  }
}