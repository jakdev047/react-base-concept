import React from 'react';

// route
import { BrowserRouter } from "react-router-dom";

// sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss';

// route
import AppRoute from './router/AppRoute';

// store
import { Provider } from 'react-redux';
import store from './data/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
