import { combineReducers, createStore } from "redux";
import { dataSearchReducer } from "./DataSearch";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"
import { pwdPaginationReducer } from "./pwdPagination"
import { databaseReducer } from "./Database";
import { filterReducer } from "./Filter";
let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
  dataSearch: dataSearchReducer,
  pwdPagination: pwdPaginationReducer,
  database: databaseReducer,
  filter: filterReducer,
})

export const store = createStore(reducer)