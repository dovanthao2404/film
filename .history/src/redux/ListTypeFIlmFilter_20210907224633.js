const listTypeFilmFilter = [];
export const listTypeFilmFilterReducer = (state = listTypeFilmFilter, action) => {
  switch (action.type) {
    case "FILTER":
      state = [...action.data];
      return [...state];
    default:
      return [...state];
  }
}