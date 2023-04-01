import './Home.css';
import HeaderImage from '../assets/header-background.jpg';

const Home = () => {
  return (
    <>
      <header>
        <img className="header__img" alt="Header" src={HeaderImage}></img>
        <section className="header__cta">
          <div className="header__cta__caption">
            “experience the height of fashion„
          </div>
        </section>{' '}
      </header>
    </>
  );
};

export default Home;
