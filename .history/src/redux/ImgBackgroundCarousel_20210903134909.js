
let filmDetailCurrent = {}
export let reducerFilmDetailCurrent = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE_URL":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    case "CHANGE_TITLE":
      state = { ...state, title: action.title };
      return state;
    case "CHAgGE_TYPE":
      state = { ...state, type: action.type };
      return state;
    default:
      return state;
  }
}