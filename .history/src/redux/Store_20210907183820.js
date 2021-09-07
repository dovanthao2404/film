import { combineReducers, createStore } from "redux";
import { dataSearchReducer } from "./DataSearch";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"
import { pwdPaginationReducer } from "./pwdPagination"
import { databaseReducer } from "./Database";
import { filterReducer } from "./Filter";
import { listTypeFilmFilterReducer } from "./ListTypeFIlmFilter";
let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
  dataSearch: dataSearchReducer,
  pwdPagination: pwdPaginationReducer,
  database: databaseReducer,
  filter: filterReducer,
  listTypeFilmFilter: listTypeFilmFilterReducer,
})

export const store = createStore(reducer)