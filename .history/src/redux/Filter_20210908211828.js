const filter = '';
export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case "FILTER":
      state = action.valueFilter;
      let temp = action.valueFIlter;
      // state = temp;
      return state;
    default:
      return state;
  }
}