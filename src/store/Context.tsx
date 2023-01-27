import React from 'react';

const Context = React.createContext<WeatherDataContext>({
  weather: {
    name: '',
    description: '',
    icon: '',
    temp: 0,
    wind: 0,
    humidity: 0,
    pressure: 0,
  },
  setWeather: () => {},
});

export type WeatherData = {
  name: string;
  description: string;
  icon: string;
  temp: number;
  wind: number;
  humidity: number;
  pressure: number;
};

type WeatherDataContext = {
  weather: WeatherData;
  setWeather: any;
};

export default Context;
