
let filmDetailCurrent = {}
export let reducerImageUrl = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = { ...imageUrl: action.imageUrl };

      return state;
    case "CHANGE_IMG":

    default:
      return state;
  }
}