import { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Card = () => {
  const [enteredCity, setEnteredCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true);

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
    if (enteredCity.trim() === '') {
      setIsValid(false);
      return;
    }
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

  return (
    <div className={styles.center}>
      <div className={styles.headerPosition}>
        <Link to={'/'} className={styles.arrowIcon}>
          <BiArrowBack />
        </Link>
        <h2>Manage Cities</h2>
      </div>

      <div className={styles.searchCity}>
        <div className={styles.citiesList}>
          <div className={styles.searchPosition}>
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
          </div>
          <div>
            <div className={styles.citiesPosition}>
              {cities.map((city, index) => (
                <div className={styles.position}>
                  <span key={index} className={styles.item}>
                    {city}
                  </span>

                  <button
                    onClick={() => removeCityHandler(index)}
                    className={styles.trashIcon}
                  >
                    <BsTrashFill />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
