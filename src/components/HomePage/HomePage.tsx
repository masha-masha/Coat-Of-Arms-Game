import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
 return (
  <section className="home">
   <div className="home__container">
    <h1 className="home__title">Гербы городов Беларуси</h1>

    <div className="home__actions">
     <Link to="/quiz" className="home__button home__button_primary">
      Угадать город по гербу
     </Link>
     <Link to="/cities" className="home__button home__button_secondary">
      Посмотреть все гербы
     </Link>
     <Link to="/cities-by-category" className="home__button home__button_secondary">
      Посмотреть гербы по категориям
     </Link>
    </div>
   </div>
  </section>
 );
};

export default HomePage;
