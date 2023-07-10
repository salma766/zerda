import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';


import App from './App';
import SuspenceScreen from './components/suspence-screen';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <StrictMode>
    <Suspense fallback={<SuspenceScreen />}>
      <App />
    </Suspense>
  </StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
