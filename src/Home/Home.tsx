import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiWind } from 'react-icons/bi';
import { IoMdPin } from 'react-icons/io';
import { SiRainmeter } from 'react-icons/si';
import styles from './Home.module.css';
import { GiWaves } from 'react-icons/gi';
import Context from '../store/Context';

const Home = () => {
  const { weather } = useContext(Context);
  let cities = weather.name;
  let wind = weather.wind;
  let humidity = weather.humidity;
  let pressure = weather.pressure;
  let temp = weather.temp - 273.15;
  let newTemp = Math.round(temp * 10) / 10;
  let weatherInfo = weather.description;
  let icon = weather.icon;

  // React.useEffect(() => {

  // }, []);

  const currentDate = new Date().toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={styles.container}>
      <div className={styles.boxSize}>
        <div className={styles.navbar}>
          <div className={styles.insideNavbar}>
            <Link to={'/cities'} className={styles.icon}>
              <AiOutlinePlusCircle />
            </Link>
            <div>
              <IoMdPin />
              {cities}
            </div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <div className={styles.weather}>
              <div className={styles.mainWeather}>
                <div className={styles.imgBox}>
                  <img src={`icons/${icon}.png`} alt="Weather icon" />
                </div>
                <div className={styles.tempBox}>
                  <div className={styles.temp}>
                    <h2 className={styles.h2style}>
                      <span className={styles.tempText}>°C</span>
                      {newTemp}
                    </h2>
                    <h3 className={styles.h3style}>{weatherInfo}</h3>
                    <h6 className={styles.h6style}>{currentDate}</h6>
                  </div>
                </div>
              </div>
              <div className={styles.addInfo}>
                <div className={styles.itemBox}>
                  <div className={styles.item}>
                    <div className={styles.iconContent}>
                      <BiWind />
                    </div>
                    <div>{wind} m/s</div>
                    <div>Wind</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.iconContent}>
                      <SiRainmeter />
                    </div>

                    <div>{humidity} %</div>
                    <div>Humidity</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.iconContent}>
                      <GiWaves />
                    </div>
                    <div>{pressure}</div>
                    <div>Pressure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
