import {
  addDays,
  compareAsc,
  eachDayOfInterval,
  endOfMonth,
  format,
  subDays,
} from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CalendarDatesContainer } from "../styled/adminStyled";
import { DateContext, MonthContext } from "./calendarComponent";
import { CalendarDateComponent } from "./calendarDateComponent";

export const CalendarDates = () => {
  const { month } = useContext(MonthContext);
  const { date } = useContext(DateContext);
  const [dates, setDates] = useState(() => {
    const dates = eachDayOfInterval({
      start: subDays(month, precedingDays(month)),
      end: addDays(
        endOfMonth(month),
        subsequentDays(precedingDays(month), endOfMonth(month))
      ),
    });
    return dates;
  });

  useEffect(() => {
    setDates(() => {
      const dates = eachDayOfInterval({
        start: subDays(month, precedingDays(month)),
        end: addDays(
          endOfMonth(month),
          subsequentDays(precedingDays(month), endOfMonth(month))
        ),
      });
      return dates;
    });
  }, [month]);

  return (
    <>
      <CalendarDatesContainer rows={Math.ceil(dates.length / 7)}>
        {dates.map((e) => {
          return (
            <CalendarDateComponent
              key={format(e, "yyyy-MM-dd")}
              props={{
                date: e,
                today:
                  format(e, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd"),
                disabled:
                  format(e, "yyyy-MM-dd") < format(new Date(), "yyyy-MM-dd") ||
                  compareAsc(e, month) < 0 ||
                  compareAsc(e, endOfMonth(month)) >= 1,
                selected:
                  format(e, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
              }}
            />
          );
        })}
      </CalendarDatesContainer>
    </>
  );
};

const subsequentDays = (prec: number, last: Date) => {
  const days = 42 - prec - parseInt(format(last, "d"));
  return days >= 7 ? days - 7 : days;
};

const precedingDays = (month: Date) => {
  return parseInt(format(month, "i")) - 1;
};
