const filter = { filter: "" };
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":

      return { ...state }
    default:
      return { ...state }
  }
}