import axios from "axios";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { LoginContainer, LoginButton } from "../styled/adminStyled";
import { InputField } from "../styled/InputField";
import { ErrorMessage } from "./errorComponent";

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
  const [error, setError] = useState({ message: "", state: false });

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
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        setError({ message: err.response.data.message, state: true });
      });
  };

  return (
    <>
      <LoginContainer>
        {error.state ? (
          <ErrorMessage state={error.state} msg={error.message} />
        ) : null}
        <InputField
          error={error.state}
          type="text"
          label="Username"
          handleChange={handleChange}
          autofocus
        />
        <InputField
          error={error.state}
          type="password"
          label="Password"
          handleChange={handleChange}
        />
        <LoginButton type="submit" color="green" onClick={handleClick}>
          Login
        </LoginButton>
      </LoginContainer>
    </>
  );
};
