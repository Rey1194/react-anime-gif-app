import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './components/GifExpertApp';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../src/styles/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GifExpertApp />
    </StrictMode>
)