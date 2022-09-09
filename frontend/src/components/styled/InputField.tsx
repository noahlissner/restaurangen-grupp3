import { Input, InputContainer, Label } from "./adminStyled";

interface IProps {
  error: boolean;
  type: "text" | "password" | "email" | "number" | "date" | "time" | "phone";
  label: string;
  autofocus?: boolean;
  handleChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  error,
  type,
  label,
  autofocus,
  handleChange,
}: IProps) => {
  return (
    <InputContainer>
      <Label htmlFor={label.toLocaleLowerCase()}>
        {label}
        <Input
          type={type}
          name={label.toLocaleLowerCase()}
          id={label.toLocaleLowerCase()}
          {...(autofocus ? { autoFocus: true } : {})}
          onKeyUp={(e) => {
            handleChange(e);
          }}
          error={error}
        />
      </Label>
    </InputContainer>
  );
};
