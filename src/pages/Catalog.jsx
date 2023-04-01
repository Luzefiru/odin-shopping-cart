import './Catalog.css';
import data from './Catalog.data';
import item1 from '../assets/catalog/embellished-gown.jpg';
import item1Alt from '../assets/catalog/embellished-gown-alt.jpg';

const Catalog = () => {
  const items = Array.from(data);

  const generateCatalogItems = (arr) => {
    const items = [];
    for (let i of arr) {
      console.log(i);
    }
  };

  generateCatalogItems(items);

  return (
    <section className="Catalog">
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt="Embellished Gown"
          src={item1}
          onMouseOver={(e) => {
            e.target.src = item1Alt;
          }}
          onMouseOut={(e) => {
            e.target.src = item1;
          }}
        ></img>
        <div className="Catalog__card__name">Embellished Gown</div>
        <div className="Catalog__card__price">2599.99</div>
      </div>
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt="Embellished Gown"
          src={item1}
          onMouseOver={(e) => {
            e.target.src = item1Alt;
          }}
          onMouseOut={(e) => {
            e.target.src = item1;
          }}
        ></img>
        <div className="Catalog__card__name">Embellished Gown</div>
        <div className="Catalog__card__price">2599.99</div>
      </div>
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt="Embellished Gown"
          src={item1}
          onMouseOver={(e) => {
            e.target.src = item1Alt;
          }}
          onMouseOut={(e) => {
            e.target.src = item1;
          }}
        ></img>
        <div className="Catalog__card__name">Embellished Gown</div>
        <div className="Catalog__card__price">2599.99</div>
      </div>
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt="Embellished Gown"
          src={item1}
          onMouseOver={(e) => {
            e.target.src = item1Alt;
          }}
          onMouseOut={(e) => {
            e.target.src = item1;
          }}
        ></img>
        <div className="Catalog__card__name">Embellished Gown</div>
        <div className="Catalog__card__price">2599.99</div>
      </div>
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt="Embellished Gown"
          src={item1}
          onMouseOver={(e) => {
            e.target.src = item1Alt;
          }}
          onMouseOut={(e) => {
            e.target.src = item1;
          }}
        ></img>
        <div className="Catalog__card__name">Embellished Gown</div>
        <div className="Catalog__card__price">2599.99</div>
      </div>
    </section>
  );
};

export default Catalog;
