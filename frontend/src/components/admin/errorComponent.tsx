import { useState } from "react";
import { Message } from "../styled/adminStyled";

interface IProps {
  state: boolean;
  msg: string;
}

export const ErrorMessage = ({ msg, state }: IProps) => {
  // eslint-disable-next-line
  const [shake, setShake] = useState(state);

  return (
    <>
      <Message align="flex-end" error={state}>
        {msg}
      </Message>
    </>
  );
};
