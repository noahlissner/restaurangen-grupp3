import "../styles/Layout.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout-container">
      LAYOUT WORKS!
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
