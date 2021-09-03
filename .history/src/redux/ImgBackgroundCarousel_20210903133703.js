
let filmDetailCurrent = {}
export let reducerImageUrl = (state = filmDetailCurrent, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = action.imageUrl;
      console.log(state)
      return state;
    default:
      return state;
  }
}