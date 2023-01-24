import { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { error } from 'console';

const API_KEY = process.env.REACT_APP_API_KEY;
const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY;

const Card = () => {
  const [enteredCity, setEnteredCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true);
  const [chosenCity, setChosenCity] = useState();

  let lat = '';
  let lon = '';

  const chosenCityHandler = (event: any) => {
    setChosenCity(event.target.value);
  };

  const getCityLocation = async () => {
    await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${chosenCity}&limit=5&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        lat = data[0].lat;
        lon = data[0].lon;

        console.log(lat);
        console.log(lon);
      });
  };
  //reference / value
  // console.log(getCityLocation());
  let borewicz = 100.999;
  Math.trunc(borewicz);
  console.log(borewicz);

  // let test = '100.999999999';
  // console.log(Math.trunc(parseFloat(test) * 100) / 100);
  // lon = data[0].parseFloat(lon).toFixed(2);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  console.log(getWeather());

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
                  <button
                    onClick={chosenCityHandler}
                    key={index}
                    className={styles.item}
                    value={city}
                  >
                    {city}
                  </button>

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
