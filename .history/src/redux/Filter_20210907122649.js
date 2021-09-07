const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      console.log(action.valueFilter)
      return { ...state }
    default:
      return { ...state }
  }
}