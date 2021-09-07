const filter = { filter: "", listFilmFilter: null };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = { ...state };
      state.isFilter = state.filter ? false : true;
      return { ...state }
    default:
      return { ...state }
  }
}