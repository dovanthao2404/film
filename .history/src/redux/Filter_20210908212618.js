const initialState = {
  Filter:’m
}
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      console.log(state)
      return state;
    default:
      return state;
  }
}