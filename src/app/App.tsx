import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './appRoutes';
import store from './store';
import ErrorBoundary from './errorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ErrorBoundary>
  );
}
