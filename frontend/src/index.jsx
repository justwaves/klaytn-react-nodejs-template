import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Theme from 'styles/Theme';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from 'redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
