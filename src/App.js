import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/country/:capital" exact component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
