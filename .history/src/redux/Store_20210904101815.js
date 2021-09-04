import { combineReducers, createStore } from "redux";
import { dataSearchReducer } from "./DataSearch";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"
import { reducerListFilmConnection } from "./ListFilmConnection";


let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
  listFilmConnection: reducerListFilmConnection,
  dataSearch: dataSearchReducer
})

export const store = createStore(reducer)