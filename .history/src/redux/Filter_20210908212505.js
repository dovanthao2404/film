const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      state = temp;
      console.log(state)
      return state;
    default:
      return state;
  }
}