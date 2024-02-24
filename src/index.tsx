import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './Container/Redux/store'
import 'semantic-ui-css/semantic.min.css'


// let initialStore={
//   loginData:{}
// }
// let reducer=(currentStore=initialStore, action:any)=>{
//   if(action.type =="loginData"){
//   return {...currentStore, loginData:action.data}
//   }
//   return currentStore;
// }

// let store=createStore(reducer)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
