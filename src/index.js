import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState, reducer } from './context/reducer';
import { StateProvider } from './context/state-context';
import './index.css';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
)

// import React, { useContext } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { DataLayer } from './DataLayer';
// import reducer, { initialState } from './reducer';

// ReactDOM.render(
//   <React.StrictMode>
//     <DataLayer
//       initialState={initialState}
//       reducer={reducer}
//     >
//       <App />
//     </DataLayer>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
