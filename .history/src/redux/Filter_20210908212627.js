const initialState = {
  Filter: ""
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      console.log(state)
      return state;
    default:
      return state;
  }
}