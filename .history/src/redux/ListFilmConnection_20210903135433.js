
let listFilmConection = []
export let reducerFilmDetailCurrent = (state = listFilmConection, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.newFilm];
      return state;
    default:
      return state;
  }
}