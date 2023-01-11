import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import classes from './Cities.module.css';
import { Link } from 'react-router-dom';

const Cities = () => {
  return (
    <div className={classes.cities}>
      <Link to={'/'}>
        <BiArrowBack />
      </Link>
      <ul>
        <li>Porucznik</li>
        <li>Borewicz</li>
      </ul>
    </div>
  );
};

export default Cities;
