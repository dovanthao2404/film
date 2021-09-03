
let imageUrl = ""
export let reducerImageUrl = (state = imageUrl, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = action.imageUrl;
      return state;
    default:
      return state;
  }
}