import { combineReducers, createStore } from "redux";
import { dataSearchReducer } from "./DataSearch";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"
import { pwdPaginationReducer } from "./pwdPagination"

let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
  dataSearch: dataSearchReducer
})

export const store = createStore(reducer)