import { combineReducers, createStore } from "redux";
import { reducerImageUrl } from "./ImgBackgroundCarousel"


let reducer = combineReducers({
  imageUrl: reducerImageUrl,
})

export const store = createStore(reducer)