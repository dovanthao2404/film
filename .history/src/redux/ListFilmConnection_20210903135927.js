
let listFilmConnection = []
export let reducerListFilmConnection = (state = listFilmConnection, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.filmAdd];
      return state;
    default:
      return state;
  }
}