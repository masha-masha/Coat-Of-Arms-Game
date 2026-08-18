import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { citiesData } from './data/cities';
import { type ICity } from './types';
import HomePage from './components/HomePage/HomePage';
import { CoatOfArmsGame } from './components/CoatOfArmsGame/CoatOfArmsGame';
import CityList from './components/CityList/CityList';
import CityDetail from './components/CityDetail/CityDetail';

function App() {

  //  const sortedCities: ICity[] = useMemo(() => {
  //   return [...citiesData].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  // }, []);

  return (
     <div className="app">
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/quiz" element={<CoatOfArmsGame />} />

        <Route path="/cities" element={<CityList/>} />

        <Route path="/cities/:id" element={<CityDetail/>} />
      </Routes>
    </div>
  )
}

export default App
