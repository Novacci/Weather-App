import { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';

const Card = () => {
  const [enteredCity, setEnteredCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true);

  // useEffect(() => {
  //   validationChecker();
  // }, []);

  useEffect(() => {
    const cities = localStorage.getItem('cities');
    if (cities) {
      setCities(JSON.parse(cities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const cityInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCity(event.target.value);
    setIsValid(true);
  };

  const addCityHandler = () => {
    validationChecker();
    setCities((prevCities) => {
      return [...prevCities, enteredCity];
    });
    setEnteredCity('');
  };

  const removeCityHandler = (index: number) => {
    setCities((cities) => {
      return cities.filter((_, elementIndex) => elementIndex !== index);
    });
  };

  const validationChecker = () => {
    if (enteredCity.trim() === '') {
      setIsValid(false);
    }
  };

  return (
    <div>
      <h2>Manage Cities</h2>

      <div className={styles.searchCity}>
        <input
          className={`${
            !isValid ? styles.inputIsNotValid : styles.inputIsValid
          }`}
          onChange={cityInputHandler}
          type="text"
          placeholder="Example: Warsaw"
          value={enteredCity}
        ></input>

        <button
          disabled={!isValid}
          onClick={addCityHandler}
          className={styles.searchIcon}
        >
          <FaSearchLocation />
        </button>
        <div>
          <div className={styles.position}>
            {cities.map((city, index) => (
              <div className={styles.position}>
                <span key={index} className={styles.item}>
                  {city}
                </span>

                <button
                  onClick={() => removeCityHandler(index)}
                  className={styles.icon}
                >
                  <BsTrashFill />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
