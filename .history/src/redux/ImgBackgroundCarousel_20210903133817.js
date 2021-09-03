
let filmDetailCurrent = {}
export let reducerImageUrl = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = { ...state, imageUrl: action.imageUrl };
      return state;
    case "CHANGE_IMG":
      state = { ...state, title: action.title };
      return state;
    default:
      return state;
  }
}