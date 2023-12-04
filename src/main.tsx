import React from 'react';
import { createRoot } from 'react-dom/client';
import {Application} from './Application';

// Что будем рендерить? Конечно наш Application!
const app = <Application />;

// Говорим типо, давай рендери его в нашем DOM'ме
createRoot(document.getElementById('app')).render(app);
