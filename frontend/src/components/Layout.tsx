import "../styles/Layout.scss";
import { Outlet } from "react-router-dom";
import { HamburgerNav } from "./HamburgerNav";
import { DesktopNav } from "./DesktopNav";

export const Layout = () => {
  return (
    <div className="layout-container">
      <HamburgerNav />
      <DesktopNav />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
