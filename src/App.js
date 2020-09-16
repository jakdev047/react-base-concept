import React from 'react';

// sass
import './assets/sass/index.scss';

// pages
// import Persons from './pages/Persons';
import Students from './pages/Students';

function App() {
  return (
    <div className="App">
      <h2>Hello React World!</h2>
      {/* <Persons /> */}
      <Students />
    </div>
  );
}

export default App;
