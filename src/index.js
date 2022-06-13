import React from 'react';
import { createRoot } from 'react-dom/client';
import IndexPage from './pages';

// import style
import './styles/style.css';



const root = createRoot(document.getElementById('root'));
root.render(<IndexPage />);