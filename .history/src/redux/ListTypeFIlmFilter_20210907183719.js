const listTypeFilmFilter = [];
const listTypeFilmFilterReducer = (state = listTypeFilmFilter, action) => {
  switch (action.type) {
    case "INIT":
      state = [...action.data]
      return { state };
    default:
      return {..state }
  }
}