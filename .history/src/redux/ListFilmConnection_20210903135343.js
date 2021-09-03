
let listFilmConection = []
export let reducerFilmDetailCurrent = (state = listFilmConection, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE_URL":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    case "CHANGE_TITLE":
      state = { ...state, title: action.title };
      return state;
    case "CHAgGE_TYPE":
      state = { ...state, typeFilm: action.typeFilm };
      return state;
    default:
      return state;
  }
}