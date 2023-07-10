import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import Loader from './components/loader-component';


import { AuthProvider } from 'react-auth-kit'
import SuspenceScreen from './components/suspense-screen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




root.render(
  <Suspense fallback={<SuspenceScreen />}>
    <AuthProvider authType={'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={window.location.protocol === "https:"}>
        <HashRouter>
          <App />
        </HashRouter>
    </AuthProvider>
  </Suspense>
);


reportWebVitals();
