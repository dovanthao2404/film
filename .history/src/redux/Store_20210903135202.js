import { combineReducers, createStore } from "redux";
import { reducerFilmDetailCurrent } from "./FilmDetailsCurrent"


let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
})

export const store = createStore(reducer)