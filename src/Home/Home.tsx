import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiWind } from 'react-icons/bi';
import { IoMdPin } from 'react-icons/io';
import { SiRainmeter } from 'react-icons/si';
import styles from './Home.module.css';
import { GiWaves } from 'react-icons/gi';

const Home = () => {
  let cities = ['Kraków', 'Warszawa', 'Borowiec'];
  let wind = '20 kmh';
  let humidity = '94%';
  let pressure = '990 hPa';
  let temp = 10;
  let weatherInfo = 'Clouds';
  let presentDate = 'Wednesday, 18 January';

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
              {cities[1]}
            </div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <div className={styles.weather}>
              <div className={styles.mainWeather}>
                <div className={styles.imgBox}>
                  <img src="icons/01d.png" alt="Weather icon" />
                </div>
                <div className={styles.tempBox}>
                  <div className={styles.temp}>
                    <h2 className={styles.h2style}>
                      <span className={styles.tempText}>°C</span>
                      {temp}
                    </h2>
                    <h3 className={styles.h3style}>{weatherInfo}</h3>
                    <h6 className={styles.h6style}>{presentDate}</h6>
                  </div>
                </div>
              </div>
              <div className={styles.addInfo}>
                <div className={styles.itemBox}>
                  <div className={styles.item}>
                    <div className={styles.iconContent}>
                      <BiWind />
                    </div>
                    <div>{wind}</div>
                    <div>Wind</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.iconContent}>
                      <SiRainmeter />
                    </div>

                    <div>{humidity}</div>
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
