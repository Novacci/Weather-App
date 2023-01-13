import React from 'react';
import Header from './Header/Header';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Cities from './Cities/Cities';
import Borewicz from './Card/Borewicz';

function App(): any {
  return (
    <>
      {/* <Borewicz /> */}
      <Header />
      <Route path="/"></Route>
      <Route path="/cities">
        <Cities />
      </Route>
    </>
  );
}

export default App;
