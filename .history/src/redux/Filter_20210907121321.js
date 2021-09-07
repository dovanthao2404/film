const filter = { filter: "", isFilter: false };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = { ...state }
      state.isFilter
      return { ...state }
    default:
      return { ...state }
  }
}