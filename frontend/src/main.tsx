import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app/App';

// import { StoreProvider } from "@/app/providers/StoreProvider";

import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root is not found. Can`t create react App');
}

const root = createRoot(container);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      {/* <StoreProvider> */}
      <App />
      {/* </StoreProvider> */}
    </BrowserRouter>
  </HelmetProvider>,
);
