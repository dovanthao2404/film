import { combineReducers, createStore } from "redux";
import { reducerFilmDetailCurrent } from "./ImgBackgroundCarousel"


let reducer = combineReducers({
  filmDetailCurrent: reducerFilmDetailCurrent,
})

export const store = createStore(reducer)