import React from 'react';

// sass
import './assets/sass/index.scss';

// pages
import Persons from './pages/Persons';

function App() {
  return (
    <div className="App">
      <h2>Hello React World!</h2>
      <Persons />
    </div>
  );
}

export default App;
