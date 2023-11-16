import React from 'react';
import ReactDOM from 'react-dom/client';
import './Component/Css/index.css';
import App from './Component/App'
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from 'recoil'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
