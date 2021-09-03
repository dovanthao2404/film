import { combineReducers, createStore } from "redux";


let number = []
let numReducer = (state = number, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.data]
      return state
    default:
      return state;
  }
}

let reduber = combineReducers({
  numReducer,
})

export const store = createStore(reducer)