import logo_placeholder from ".././assets/logo-placeholder.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={logo_placeholder} alt="" />
        </div>
        <div className="footer-find-us">
          <h2>FIND US</h2>
          <div>
            <span className="lg-text">Ettgatunamn 177</span>
          </div>
          <div>
            <span className="sm-text">116 42, Stockholm</span>
          </div>
        </div>
        <div className="footer-contact-us">
          <h2>CONTACT US</h2>
          <div>
            <span className="lg-text">08 - 12 34 56</span>
          </div>
          <div>
            <span className="lg-text">Mailadresstilloss@donerssoner.com</span>
          </div>
        </div>
      </div>
    </>
  );
};
