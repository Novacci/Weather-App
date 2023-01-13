import React from 'react';
import { AiOutlineEnvironment } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import classes from './Header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <h2 className={classes.h2}>Poznań</h2>
    </div>
  );
};

export default Header;
