import React from 'react';

// route
import { BrowserRouter } from "react-router-dom";

// sass
import './assets/sass/index.scss';

// route
import AppRoute from './router/AppRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
