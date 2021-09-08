import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Film from './Components';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./redux/Store"
import App from "./App"
console.log(process.env.API_KEY)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Film /> */}
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
