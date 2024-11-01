// Use 'yarn run start' to start app
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

function Index() {
  return (
    <Router>
      <App />
    </Router>
  );
}

const root = createRoot(document.querySelector('#averent-landing'));

root.render(<Index />)
