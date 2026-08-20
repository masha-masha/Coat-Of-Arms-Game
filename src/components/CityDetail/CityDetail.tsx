import "./CityDetail.css";
import { useParams, Link } from "react-router-dom";
import { type ICity } from "../../types";
import { useNavigate } from "react-router-dom";

interface CityDetailProps {
 cities: ICity[];

}

const CityDetail: React.FC<CityDetailProps> = ({ cities }) => {
 const { id } = useParams<{ id: string }>();
 const cityId = Number(id);
 const navigate = useNavigate();

 const currentIndex = cities.findIndex((c) => c.id === cityId);
 const currentCity = cities[currentIndex];

 if (!currentCity) {
  return (
   <div className="city-detail">
    <h2>Город не найден</h2>
    <Link to="/cities">К списку городов</Link>
   </div>
  );
 }

 const prevCity = currentIndex > 0 ? cities[currentIndex - 1] : null;
 const nextCity =
  currentIndex < cities.length - 1 ? cities[currentIndex + 1] : null;

 return (
  <section className="city-detail">
   <div className="city-detail__container">
    <div className="city-detail__card">
     <div className="city-detail__image-wrapper">
      <img
       src={currentCity.coatOfArmsUrl}
       alt={`Герб города ${currentCity.name}`}
       className="city-detail__image"
      />
     </div>

     <h1 className="city-detail__title">{currentCity.name}</h1>

     <div className="city-detail__nav">
      <button
       className="city-detail__btn city-detail__btn_home"
       onClick={() => navigate(-1)}
      >
      К списку
      </button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default CityDetail;
