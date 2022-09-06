import "../styles/DesktopNav.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo_placeholder from "../assets/logo-placeholder.png";
import {
  HamburgerDataHashLinks,
  HamburgerDataLinks,
} from "../services/HamburgerData";

export const DesktopNav = () => {
  return (
    <div className="desktop-nav-wrapper">
      <nav className="desktop-nav-menu">
        <div className="nav-left">
          <ul className="nav-menu-items">
            {HamburgerDataLinks.map((data, i) => {
              return (
                <li key={i} className={data.cName}>
                  <Link to={data.path}>
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-center">
          <div className="logo-container">
            <Link to="/">
              <img src={logo_placeholder} alt="bild på logotyp" />
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <ul className="nav-menu-items">
            {HamburgerDataHashLinks.map((data, i) => {
              return (
                <li key={i} className={data.cName}>
                  <HashLink smooth to={data.path}>
                    <span>{data.title}</span>
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
