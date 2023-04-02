import './Catalog.css';
import data from './Catalog.data';

const Catalog = () => {
  const items = Array.from(data);

  const generateCatalogItems = (arr) => {
    return arr.map((i) => (
      <div className="Catalog__card">
        <img
          className="Catalog__card__image"
          alt={i.name}
          src={i.image}
          onMouseOver={(e) => {
            e.target.src = i.imageAlt;
          }}
          onMouseOut={(e) => {
            e.target.src = i.image;
          }}
        ></img>
        <div className="Catalog__card__name">{i.name}</div>
        <div className="Catalog__card__price">{i.price}</div>
      </div>
    ));
  };

  return <section className="Catalog">{generateCatalogItems(items)}</section>;
};

export default Catalog;
