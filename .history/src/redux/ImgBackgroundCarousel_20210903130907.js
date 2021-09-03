
let imageUrl = ""
export let numReducer = (state = imageUrl, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      state = [...state, action.data]
      return state
    default:
      return state;
  }
}