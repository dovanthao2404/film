const filter = { filter: "", isFilter: false };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      if (state.filter === "") {
        state.isFilter = true;
      }
      return { ...state }
    default:
      return { ...state }
  }
}