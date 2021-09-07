const filter = { filter: "" };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = { ...state };
      return { ...state }
    default:
      return { ...state }
  }
}