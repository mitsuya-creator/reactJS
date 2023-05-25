import React from 'react';
import ReactDOM from 'react-dom/client';
import Person from './components/person';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Person favCol='red' />);