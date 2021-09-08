const initialState = {
  Filter: ""
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      const temp = { ...state }
      temp.Filter = action.valueFIlter
      console.log(state)
      state = temp
      return state;
    default:
      return state;
  }
}