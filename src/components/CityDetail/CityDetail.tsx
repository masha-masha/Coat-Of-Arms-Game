import "./CityDetail.css";
import React, { useState } from "react";
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

 const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

 return (
  <section className="city-detail">
   <div className="city-detail__container">
    <div className="city-detail__card">
     <button
      className="city-detail__facts-btn"
      onClick={() => setIsModalOpen(true)}
     >
      Интересные факты
     </button>

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
       к списку
      </button>
     </div>
    </div>
   </div>

   {isModalOpen && (
    <div className="city-modal-overlay" onClick={() => setIsModalOpen(false)}>
     <div className="city-modal" onClick={(e) => e.stopPropagation()}>
      <div className="city-modal__header">
       <h3 className="city-modal__title">Интересные факты</h3>
       <button
        className="city-modal__close-btn"
        onClick={() => setIsModalOpen(false)}
       >
        ✕
       </button>
      </div>

      <div className="city-modal__body">
       {currentCity.facts && currentCity.facts.length > 0 ? (
        <ul className="city-modal__list">
         {currentCity.facts.map((fact, index) => (
          <li key={index} className="city-modal__item">
           {fact}
          </li>
         ))}
        </ul>
       ) : (
        <p className="city-modal__empty">
         Интересные факты об этом городе скоро появятся
        </p>
       )}
      </div>
     </div>
    </div>
   )}
  </section>
 );
};

export default CityDetail;
