const database = null;
export const databaseReducer = (state = database, action) => {
  switch (action.type) {
    case "SET_DB":
      state = action.data;
  }
}