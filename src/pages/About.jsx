import aboutImage from "../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="About__left">
        <h1 className="About__left__header">
          About{" "}
          <span className="About__left__header--highlight">RunwayRepublic</span>
        </h1>
        <p className="About__left__body">
          <span className="About__left__body--bold">
            We specialize in creating high-end fashion products that cater to
            individuals who appreciate quality and exclusivity.&nbsp;
          </span>
          Our collections are designed to reflect the latest fashion trends
          while also incorporating timeless pieces that will remain stylish for
          years to come. We take pride in our attention to detail, using only
          the finest materials and craftsmanship to create our products. Whether
          you're looking for a chic dress for a formal occasion or a statement
          accessory to elevate your outfit, we have something to offer for
          fashion-conscious individuals of all ages. Our commitment to
          excellence and passion for fashion sets us apart from other fashion
          companies, making us a go-to choice for those seeking high-end fashion
          products.
        </p>
      </div>
      <div className="About__right">
        <img
          alt="A Fashion Model"
          className="About__right__img"
          src={aboutImage}
        ></img>
      </div>
    </div>
  );
};

export default About;
