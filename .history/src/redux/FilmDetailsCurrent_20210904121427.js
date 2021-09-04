
let filmDetailCurrent = {}
export let reducerFilmDetailCurrent = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE_URL":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    case "CHANGE_TITLE":
      state = { ...state, title: action.title };
      return state;
    case "CHANGE_TYPE":
      state = { ...state, typeFilm: action.typeFilm };
      return state;
    case "CHANGE_URL":
      state = { ...state, url: action.url };
      return state;
    case "CHANGE_INDEX":
      state = { ...state, index: action.index };
      return state;
    default:
      return state;
  }
}