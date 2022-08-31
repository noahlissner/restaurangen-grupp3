import "../../styles/Home.scss";
import Carousel from "nuka-carousel";
import kebabOne from "../../assets/kebab-1.jpeg";
import kebabTwo from "../../assets/kebab-2.jpeg";
import kebabThree from "../../assets/kebab-3.jpeg";
import grabbarna from "../../assets/doners-soner.jpeg";
import geolocation from "../../assets/geolocation.png";

export const Home = () => {
  return (
    <>
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
        <div className="about-img-container">
          <img src={grabbarna} alt="bild på ägarna" />
        </div>
        <div className="about-text-container">
          <h1>ABOUT DöNERS SöNER</h1>
          <p>
            Allt startade från en dröm. Sen här kommer massa filler text där jag
            inte har en aning om vad jag ska skriver tbh. Så vi får ändra den
            här någongån eller lämna den som den är. Just nu så skriver jag bara
            för att se hur det blir med en lite längre text. Tror detta kanske
            räcker... Vi får se. Here goes nothing.
          </p>
          <p>
            Det räckte inte riktigt... Kändes som det behövdes en till paragraf.
            Ett till paragraf? Nån av dem är rätt. Så här är jag igen och
            skriver mer och mer. Nu räcker de nog.
          </p>
        </div>
      </div>
      <div id="contact">
        <div className="contact-text-container">
          <h1>CONTACT</h1>
          <div className="contact-info-container">
            <h2>Stockholm</h2>
            <div>
              <span className="lg-text">Ettgatunamn 177</span>
            </div>
            <div>
              <span className="sm-text">116 42, Stockholm</span>
            </div>
            <div>
              <span className="lg-text">08 - 12 34 56</span>
            </div>
            <div>
              <span className="lg-text">Mailadresstilloss@donerssoner.com</span>
            </div>
          </div>
        </div>
        <div className="contact-img-container">
          <img
            src={geolocation}
            alt="bild på karta med adress där resturangen ligger"
          />
        </div>
      </div>
    </>
  );
};
