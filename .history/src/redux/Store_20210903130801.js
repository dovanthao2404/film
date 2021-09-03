import { combineReducers, createStore } from "redux";
import { numReducer } from "./ImgBackgroundCarousel"


let reducer = combineReducers({
  numReducer,
})

export const store = createStore(reducer)