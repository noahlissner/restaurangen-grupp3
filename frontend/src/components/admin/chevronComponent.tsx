import { addMonths, subMonths } from "date-fns";
import { useContext } from "react";
import { ChevronContainer, Chevron } from "../styled/adminStyled";
import { MonthContext } from "./calendarComponent";

interface IProps {
  direction: "left" | "right";
}

export const ChevronComponent = ({ direction }: IProps) => {
  const { month, setMonth } = useContext(MonthContext);

  const goToMonth = (direction: "left" | "right") => {
    setMonth(direction === "left" ? subMonths(month, 1) : addMonths(month, 1));
  };
  return (
    <>
      <ChevronContainer
        side={direction}
        onClick={() => {
          goToMonth(direction);
        }}
      >
        <Chevron srcSet={`./assets/svg/chevron${direction}.svg`} />
      </ChevronContainer>
    </>
  );
};
