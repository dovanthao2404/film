const initialState = {
  Filter: ""
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      const temp = { ...state }
      temp.Filter = action.valueFIlter
      console.log(state)
      return state;
    default:
      return state;
  }
}