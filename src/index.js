import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const AppContainer = () => <Provider store={store}><App /></Provider>

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer/>, rootEl);  
  
if (module.hot) {
    module.hot.accept('./app', () => {
      ReactDOM.render(
      <AppContainer/>, rootEl)
    })
  }


registerServiceWorker();


