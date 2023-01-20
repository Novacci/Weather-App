import { Route, Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './App.module.css';
import Card from './Card/Card';
import Home from './Home/Home';

function App(): any {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cities">
        <Card />
      </Route>
    </>
  );
}

export default App;
