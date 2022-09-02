import axios from "axios";
import React, { useState } from "react";
import { Cookies } from "react-cookie";

/**
 * Admin login component.
 *
 * Content:
 * - {@link handleChange Handle input change} - sets the state of the input value.
 * - {@link handleClick Submit form values} - fetch token from server and set it in cookie.
 *
 * @returns login form.
 */

export const AdminLogin = (): JSX.Element => {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "username") {
      setUsername(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    axios
      .post("http://localhost:2500/admin/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          cookies.set("token", res.data.token);
        }
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="username"
        onKeyUp={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onKeyUp={(e) => {
          handleChange(e);
        }}
      />
      <input type="submit" value="Login" onClick={handleClick} />{" "}
    </>
  );
};
