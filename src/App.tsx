import React from 'react';
import Header from './Header/Header';
import { Route, Link } from 'react-router-dom';
import Cities from './Cities/Cities';
import Borewicz from './Card/Borewicz';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './App.module.css';

function App(): any {
  return (
    <>
      <Route exact path="/">
        <Link to={'/cities'} className={styles.icon}>
          <AiOutlinePlusCircle />
        </Link>
      </Route>
      <Route path="/cities">
        <Cities />
      </Route>
    </>
  );
}

export default App;
