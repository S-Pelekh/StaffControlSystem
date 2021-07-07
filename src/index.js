import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import './i18n';
import { Loader } from './components/loader';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
