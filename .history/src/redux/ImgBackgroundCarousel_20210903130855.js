
let imageUrl = ""
export let numReducer = (state = imageUrl, action) => {
  switch (action.type) {
    case "CHANGE":
      state = [...state, action.data]
      return state
    default:
      return state;
  }
}