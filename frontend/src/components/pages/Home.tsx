import "../../styles/Home.scss";
import Carousel from "nuka-carousel";
import kebabOne from "../../assets/kebab-1.jpeg";
import kebabTwo from "../../assets/kebab-2.jpeg";
import kebabThree from "../../assets/kebab-3.jpeg";

export const Home = () => {
  return (
    <>
      <Carousel dragging={true} wrapAround={true}>
        <div className="img-container">
          <img src={kebabOne} />
        </div>
        <div className="img-container">
          <img src={kebabTwo} />
        </div>
        <div className="img-container">
          <img src={kebabThree} />
        </div>
      </Carousel>
    </>
  );
};
