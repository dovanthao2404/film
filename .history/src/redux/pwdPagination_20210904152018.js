const pwdPagination = 1;
export const pwdPaginationReducer = (state = pwdPagination, action) => {
  switch (action.type) {
    case "RESET_PWD":
      state = 1;
      return state;
    default:
      return state;
  }
}