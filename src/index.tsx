import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/pages/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const app = (
  <React.StrictMode>
    <React.Suspense fallback={<div>Carregando...</div>}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);

root.render(app);
reportWebVitals();
