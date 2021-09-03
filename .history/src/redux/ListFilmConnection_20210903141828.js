
let listFilmConnection = []
export let reducerListFilmConnection = (state = listFilmConnection, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.filmAdd];
      console.log(state)
      return state;
    default:
      return state;
  }
}