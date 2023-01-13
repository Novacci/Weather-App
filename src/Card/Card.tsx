import react, { useState, ChangeEvent, useEffect } from 'react';
import styles from './Card.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';

const Card = () => {
  const [enteredCity, setEnteredCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);

  const cityInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCity(event.target.value);
  };

  // const removeCityHandler = () => {
  // };
  const addCityHandler = () => {
    setCities((prevCities) => {
      return [enteredCity, ...prevCities];
    });
    setEnteredCity('');
  };

  return (
    <div>
      <h2>Manage Cities</h2>

      <div className={styles.searchCity}>
        <input
          onChange={cityInputHandler}
          type="text"
          placeholder="Example: Warsaw"
          value={enteredCity}
        ></input>
        <button onClick={addCityHandler} className={styles.icon}>
          <FaSearchLocation />
        </button>
        <div>
          {cities.map((city, index) => (
            <ul key={index} className={styles.position}>
              <li className={styles.item}>{city}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

// <BsTrashFill onClick={removeCityHandler} className={styles.icon} />
