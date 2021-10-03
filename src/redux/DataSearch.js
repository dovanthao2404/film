let dataSearch = "";
export const dataSearchReducer = (state = dataSearch, action) => {
  switch (action.type) {
    case "SET_DATA_SEARCH":
      state = action.dataSearch;
      return state;
    default:
      return state;
  }
};
