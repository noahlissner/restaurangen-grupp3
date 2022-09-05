import "../../styles/Home.scss";
import Carousel from "nuka-carousel";
import kebabOne from "../../assets/kebab-1.jpeg";
import kebabTwo from "../../assets/kebab-2.jpeg";
import kebabThree from "../../assets/kebab-3.jpeg";
import { Footer } from "../Footer";
import { Contact } from "../Contact";
import { About } from "../About";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <Carousel dragging={true} wrapAround={true}>
        <div className="img-container">
          <img src={kebabOne} alt="bild på en döner med bröd" />
        </div>
        <div className="img-container">
          <img src={kebabTwo} alt="bild på dönertallrik" />
        </div>
        <div className="img-container">
          <img src={kebabThree} alt="bild på en dönergrill" />
        </div>
      </Carousel>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};
