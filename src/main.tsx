import React from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
