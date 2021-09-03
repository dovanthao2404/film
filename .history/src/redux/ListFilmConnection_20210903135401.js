
let listFilmConection = []
export let reducerFilmDetailCurrent = (state = listFilmConection, action) => {
  switch (action.type) {
    case "ADD":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    default:
      return state;
  }
}