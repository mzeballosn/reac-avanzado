import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="blue">
        <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);