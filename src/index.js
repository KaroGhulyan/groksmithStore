import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App.tsx';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import { StoreProvider } from './components/store-context/store-context';
import store from './store';
import './style.scss'

const storeService = new StoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <StoreProvider>
        <Router>
          <App />
        </Router>
      </StoreProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
