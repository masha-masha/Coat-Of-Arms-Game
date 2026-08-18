import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
 return (
  <section className="home">
   <div className="home__container">
    <h1 className="home__title">Гербы городов Беларуси</h1>

    <div className="home__actions">
     <Link to="/quiz" className="home__button home__button_primary">
      Угадать город
     </Link>
     <Link to="/cities" className="home__button home__button_secondary">
      Посмотреть города
     </Link>
    </div>
   </div>
  </section>
 );
};

export default HomePage;
