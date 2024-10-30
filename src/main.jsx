import React ,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./assets/scss/style.scss";
import reducer from './reducer';
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import { StateProvider } from './context/index.js';

import { INITIAL_STATE as APP_INITIAL_STATE } from "./app/reducer";

const initialState = {
  app: APP_INITIAL_STATE,
};

ReactDOM.createRoot(document.getElementById('root')).render(

  <Suspense fallback={<Loader />}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <HashRouter>
        <App />
      </HashRouter>
    </StateProvider>
  </Suspense>
)
