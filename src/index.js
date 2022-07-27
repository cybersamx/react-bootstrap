import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min';
import App from './app/App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
