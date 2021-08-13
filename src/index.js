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
