import { addMonths, compareAsc, format, getDate, subMonths } from "date-fns";
import { useContext } from "react";
import { CalendarDate } from "../styled/adminStyled";
import { DateContext, MonthContext } from "./calendarComponent";

interface IProps {
  props: {
    date: Date;
    today?: boolean;
    disabled?: boolean;
    selected?: boolean;
  };
}

export const CalendarDateComponent = ({ props }: IProps) => {
  const { setDate } = useContext(DateContext);
  const { month, setMonth } = useContext(MonthContext);

  const handleClick = () => {
    if (
      compareAsc(
        parseInt(format(month, "M")),
        parseInt(format(props.date, "M"))
      ) === -1
    ) {
      setMonth(addMonths(month, 1));
    } else if (
      compareAsc(
        parseInt(format(month, "M")),
        parseInt(format(props.date, "M"))
      ) === 1
    ) {
      setMonth(subMonths(month, 1));
    }
    setDate(props.date);
  };
  return (
    <>
      <CalendarDate
        today={props.today}
        disabled={props.disabled}
        selected={props.selected}
        onClick={handleClick}
      >
        {getDate(props.date)}
      </CalendarDate>
    </>
  );
};
