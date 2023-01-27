import { Route } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card/Card';
import Home from './Home/Home';
import Context from './store/Context';
import { WeatherData } from './store/Context';

function App(): any {
  const [weather, setWeather] = useState<WeatherData>({
    name: '',
    description: '',
    icon: '',
    temp: 0,
    wind: 0,
    humidity: 0,
    pressure: 0,
  });

  return (
    <>
      <Context.Provider value={{ weather, setWeather }}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cities">
          <Card />
        </Route>
      </Context.Provider>
    </>
  );
}

export default App;
