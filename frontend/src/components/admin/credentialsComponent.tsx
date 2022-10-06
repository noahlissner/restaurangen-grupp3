import { useState, Dispatch, SetStateAction } from "react";
import {
  CredentialsContainer,
  Input,
  InputContainer,
  Label,
} from "../styled/adminStyled";

interface IProps {
  name: Dispatch<SetStateAction<string>>;
  email: Dispatch<SetStateAction<string>>;
  phone: Dispatch<SetStateAction<string>>;
}

export const CredentialsComponent = ({ name, email, phone }: IProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    name(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    phone(e.target.value);
  };

  return (
    <>
      <CredentialsContainer>
        <InputContainer halfWidth>
          <Label>Namn</Label>
          <Input type="text" name="name" onChange={handleNameChange} />
        </InputContainer>
        <InputContainer halfWidth>
          <Label>Telefonnummer</Label>
          <Input type="tel" name="phone" onChange={handlePhoneChange} />
        </InputContainer>
        <InputContainer fullWidth>
          <Label>E-post</Label>
          <Input type="email" name="email" onChange={handleEmailChange} />
        </InputContainer>
      </CredentialsContainer>
    </>
  );
};
