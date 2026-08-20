import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { citiesData } from "./data/cities";
import { type ICity } from "./types";
import HomePage from "./components/HomePage/HomePage";
import { CoatOfArmsGame } from "./components/CoatOfArmsGame/CoatOfArmsGame";
import CityList from "./components/CityList/CityList";
import CityDetail from "./components/CityDetail/CityDetail";
import CitiesByCategory from "./components/CitiesByCategory/CitiesByCategory";

function App() {
 const sortedCities: ICity[] = useMemo(() => {
  return [...citiesData].sort((a, b) => a.name.localeCompare(b.name, "ru"));
 }, []);

 return (
  <div className="app">
   <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/quiz" element={<CoatOfArmsGame />} />

    <Route path="/cities" element={<CityList cities={sortedCities} />} />

    <Route path="/cities/:id" element={<CityDetail cities={sortedCities} />} />

    <Route path="/cities-by-category" element={<CitiesByCategory  cities={sortedCities}/>} />
   </Routes>
  </div>
 );
}

export default App;
