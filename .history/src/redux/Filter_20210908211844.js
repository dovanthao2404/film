const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      let temp = { ...state };
      temp = state;
      // state = temp;
      return state;
    default:
      return state;
  }
}