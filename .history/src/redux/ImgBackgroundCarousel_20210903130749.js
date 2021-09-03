
let number = []
export let numReducer = (state = number, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.data]
      return state
    default:
      return state;
  }
}