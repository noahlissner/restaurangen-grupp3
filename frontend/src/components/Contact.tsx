import "../styles/Contact.scss";
import geolocation from ".././assets/geolocation.png";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
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
  );
};
