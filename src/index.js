import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App.tsx';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import { StoreProvider } from './components/store-context/store-context';
import store from './store';
import './style.scss';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const storeService = new StoreService();
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ErrorBoundry>
        <StoreProvider>
          <Router>
            <App />
          </Router>
        </StoreProvider>
      </ErrorBoundry>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
