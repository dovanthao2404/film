const filter = { filter: "", isFilter: false };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = { ...state };
      state.isFilter = state.filter ?
      return { ...state }
    default:
      return { ...state }
  }
}