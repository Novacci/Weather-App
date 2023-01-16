import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import classes from './Cities.module.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Cities = () => {
  return (
    <div className={classes.position}>
      <div className={classes.cities}>
        <Link to={'/'} className={classes.icon}>
          <BiArrowBack />
        </Link>
        <Card />
      </div>
    </div>
  );
};

export default Cities;
