const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      console.log("a")
      return { ...state }
    default:
      return { ...state }
  }
}