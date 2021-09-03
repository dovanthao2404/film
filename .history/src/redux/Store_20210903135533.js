import { combineReducers, createStore } from "redux";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"
import { reducerListFilmConnection } from "./ListFilmConnection";


let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
  listFilmConnection: reducerListFilmConnection
})

export const store = createStore(reducer)