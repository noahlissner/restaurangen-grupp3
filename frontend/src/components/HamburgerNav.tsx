import "../styles/HamburgerNav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  HamburgerDataLinks,
  HamburgerDataHashLinks,
} from "../services/HamburgerData";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import logo_placeholder from "../assets/logo-placeholder.png";

export const HamburgerNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <Link to={"/"}>
            <img src={logo_placeholder} alt="bild på logotyp" />
          </Link>
        </div>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <IoIcons.IoClose />
            </Link>
          </li>
          {HamburgerDataLinks.map((data, i) => {
            return (
              <li key={i} className={data.cName} onClick={showSidebar}>
                <Link to={data.path}>
                  <span>{data.title}</span>
                </Link>
              </li>
            );
          })}
          {HamburgerDataHashLinks.map((data, i) => {
            return (
              <li key={i} className={data.cName} onClick={showSidebar}>
                <HashLink smooth to={data.path}>
                  <span>{data.title}</span>
                </HashLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
