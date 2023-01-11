import React from 'react';
import Header from './Header/Header';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Cities from './Cities/Cities';

function App(): any {
  return (
    <>
      <Header />
      <Route path="/"></Route>
      <Route path="/cities">
        <Cities />
      </Route>
    </>
  );
}

export default App;
