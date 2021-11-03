import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App.jsx';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import { StoreProvider } from './components/store-context/store-context';
import './style.scss';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const storeService = new StoreService();
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundry>
      <StoreProvider value={storeService}>
        <Router>
          <App />
        </Router>
      </StoreProvider>
    </ErrorBoundry>
  </QueryClientProvider>,
  document.getElementById('root')
);
