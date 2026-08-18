import "./CityList.css";
import { Link } from "react-router-dom";
import { type ICity } from "../../types";

interface CityListProps {
  cities: ICity[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
 return (
  <section className="city-list">
   <div className="city-list__container">
    <div className="city-list__header">
     <Link to="/" className="city-list__back-btn">
      ← На главную
     </Link>
     <h2 className="city-list__title">Список городов ({cities.length})</h2>
    </div>

    <ul className="city-list__items">
     {cities.map((city) => (
      <li key={city.id}>
       <Link to={`/cities/${city.id}`} className="city-list__item">
        <img src={city.coatOfArmsUrl} alt="" className="city-list__icon" />
        <span className="city-list__name">{city.name}</span>
        <span className="city-list__arrow">→</span>
       </Link>
      </li>
     ))}
    </ul>
   </div>
  </section>
 );
};

export default CityList;
