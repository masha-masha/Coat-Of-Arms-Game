import React, { useState, useMemo } from "react";
import "./CitiesByCategory.css";
import { Link } from "react-router-dom";
import { categoriesList } from "../../data/categories";

import { type ICity } from "../../types";

interface CityListProps {
  cities: ICity[];
}

const CitiesByCategory: React.FC<CityListProps> = ({cities}) => {
 const [activeCategory, setActiveCategory] = useState<string>("all");

 const filteredCities = useMemo(() => {
  if (activeCategory === "all") {
   return cities;
  }
  return cities.filter((city) => city.categories?.includes(activeCategory));
 }, [activeCategory, cities]);

 return (
  <section className="categories-page">
   <div className="categories-page__container">
    <div className="categories-page__header">
     <Link to="/" className="categories-page__back-btn">
      ← На главную
     </Link>
     <h1 className="categories-page__title">Категории гербов</h1>
     <p className="categories-page__subtitle">
      Выберите фильтр, чтобы увидеть соответствующие гербы
     </p>
    </div>
    <div className="categories-page__filters">
     {categoriesList.map((cat) => (
      <button
       key={cat.id}
       className={`categories-page__filter-btn ${
        activeCategory === cat.id ? "categories-page__filter-btn_active" : ""
       }`}
       onClick={() => setActiveCategory(cat.id)}
      >
       <span>{cat.title}</span>
      </button>
     ))}
    </div>

    <div className="categories-page__grid">
     {filteredCities.length > 0 ? (
      filteredCities.map((city) => (
       <Link
        key={city.id}
        to={`/cities/${city.id}`}
        className="categories-page__card"
       >
        <div className="categories-page__image-wrapper">
         <img
          src={city.coatOfArmsUrl}
          alt={`Герб ${city.name}`}
          className="categories-page__image"
         />
        </div>
        <span className="categories-page__card-title">{city.name}</span>
       </Link>
      ))
     ) : (
      <div className="categories-page__empty">
       В этой категории пока нет гербов :(
      </div>
     )}
    </div>
   </div>
  </section>
 );
};

export default CitiesByCategory;
