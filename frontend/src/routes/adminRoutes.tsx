import axios from "axios";
// import "../scss/main.scss";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { AdminDashboard } from "../components/admin/dashboardComponent";
import { AdminLogin } from "../components/admin/loginComponent";

/**
 * Admin route component.
 *
 * Content:
 * - useEffect hook - fetches the token from the cookie and validates it.
 *
 * @route GET /admin (all admin components are rendered via this route)
 * @returns token ? {@link AdminDashboard Admin Dashboard Component} : {@link AdminLogin Admin Login Component}
 */

export const AdminRoute = (): JSX.Element => {
  require("../scss/main.scss");
  const cookies = new Cookies();
  const [token, setToken] = useState(cookies.get("token"));

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:2500/admin/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.message === "Unauthorized") {
            cookies.remove("token");
            setToken(undefined);
            window.location.reload();
          }
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{token ? <AdminDashboard /> : <AdminLogin />}</>;
};
