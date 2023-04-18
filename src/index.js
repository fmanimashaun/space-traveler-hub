import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/space-traveler-hub">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
