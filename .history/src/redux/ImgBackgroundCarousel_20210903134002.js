
let filmDetailCurrent = {}
export let reducerImageUrl = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE_URL":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    case "CHANGE_TITLE":
      state = { ...state, title: action.title };
      return state;
    case "CHAGE_":
      return state;
    default:
      return state;
  }
}