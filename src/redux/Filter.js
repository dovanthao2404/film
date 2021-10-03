const filter = "";
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      return state;
    default:
      return state;
  }
};
