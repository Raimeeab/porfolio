import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Reset css styles/ css is global, not specific components
import App from '../src/App'; // Holds all the components togeths - the main component

// Application init 
ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

