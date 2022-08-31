import "../styles/Layout.scss";
import { Outlet } from "react-router-dom";
import { HamburgerNav } from "./HamburgerNav";

export const Layout = () => {
  return (
    <div className="layout-container">
      <HamburgerNav />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
