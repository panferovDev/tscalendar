import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './redux/rootReducer';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  composeEnhancers()
)

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
