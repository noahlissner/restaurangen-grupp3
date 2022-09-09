import { useContext } from "react";
import { Icon, IconContainer } from "../styled/adminStyled";
import { ContentContext, Menu } from "./dashboardComponent";

interface IMenuItemProps {
  type: "dashboard" | "search" | "calendar" | "create";
}

export const MenuItem = ({ type }: IMenuItemProps) => {
  const setContent = useContext(ContentContext)[1] as React.Dispatch<
    React.SetStateAction<Menu>
  >;
  return (
    <>
      <IconContainer
        onClick={() => {
          setContent(type as Menu);
        }}
      >
        <Icon srcSet={`./assets/svg/${type}.svg`} />
      </IconContainer>
    </>
  );
};
