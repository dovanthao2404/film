
let imageUrl = ""
export let numReducer = (state = imageUrl, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = action.imageUrl;
      return state;
    default:
      return state;
  }
}