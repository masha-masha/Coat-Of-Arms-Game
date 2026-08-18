import React, { useState } from "react";
import { type ICity } from "../../types";
import { citiesData } from "../../data/cities";
import { Link } from "react-router-dom";
import "./CoatOfArmsGame.css";

type QuizStatus = "idle" | "correct" | "incorrect";

const getInitialRandomCity = (): ICity => {
 const randomIndex = Math.floor(Math.random() * citiesData.length);
 return citiesData[randomIndex];
};

export const CoatOfArmsGame: React.FC = () => {
 const [currentCity, setCurrentCity] = useState<ICity>(getInitialRandomCity());
 const [userInput, setUserInput] = useState<string>("");
 const [status, setStatus] = useState<QuizStatus>("idle");

 const getNextRandomCity = () => {
  let nextCity: ICity;
  do {
   const randomIndex = Math.floor(Math.random() * citiesData.length);
   nextCity = citiesData[randomIndex];
  } while (
   currentCity &&
   nextCity.id === currentCity.id &&
   citiesData.length > 1
  );

  setCurrentCity(nextCity);
  setUserInput("");
  setStatus("idle");
 };

 const normalize = (str: string) => str.trim().toLowerCase().replace(/ё/g, "е");

 const handleSubmit = (e: React.SubmitEvent) => {
  e.preventDefault();
  if (!currentCity || !userInput.trim() || status !== "idle") return;

  const normalizedInput = normalize(userInput);
  const isCorrect = currentCity.aliases.some(
   (alias) => normalize(alias) === normalizedInput,
  );

  if (isCorrect) {
   setStatus("correct");
  } else {
   setStatus("incorrect");
  }
 };

 if (!currentCity) return null;

 return (
  <section className="city-quiz">
   <div className="city-quiz__container">
    <div className="city-quiz__card">
     <div className="city-quiz__image-wrapper">
      <img
       src={currentCity.coatOfArmsUrl}
       alt="Герб города"
       className="city-quiz__image"
      />
     </div>

     <form className="city-quiz__form" onSubmit={handleSubmit}>
      {status === "idle" && (
       <input
        type="text"
        className="city-quiz__input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Введите название города..."
        autoFocus
       />
      )}
      {status === "correct" && (
       <div className="city-quiz__message city-quiz__message_correct">
        Правильно! Это {userInput}
       </div>
      )}

      {status === "incorrect" && (
       <div className="city-quiz__message city-quiz__message_incorrect">
        Нет, это {currentCity.name}
       </div>
      )}

      {status === "idle" ? (
       <button
        type="submit"
        className="city-quiz__button city-quiz__button_submit"
        disabled={!userInput.trim()}
       >
        Проверить
       </button>
      ) : (
       <button
        type="button"
        className="city-quiz__button city-quiz__button_next"
        onClick={getNextRandomCity}
        autoFocus
       >
        Следующий город
       </button>
      )}
       <Link to="/" className="city-quiz__button city-quiz__back-link">
          ← На главную
        </Link>
     </form>
    </div>
   </div>
  </section>
 );
};
