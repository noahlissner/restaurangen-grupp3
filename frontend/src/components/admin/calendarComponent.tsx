import { format, startOfMonth, startOfToday } from "date-fns";
import { sv } from "date-fns/locale";
import { createContext, useMemo, useState } from "react";
import {
  CalendarContainer,
  CalendarDays,
  CalendarHeader,
  Text,
} from "../styled/adminStyled";
import { CalendarDates } from "./calendarDatesComponent";
import { ChevronComponent } from "./chevronComponent";

export const DateContext = createContext({
  date: startOfToday(),
  setDate: (date: Date) => {},
});

export const MonthContext = createContext({
  month: startOfMonth(startOfToday()),
  setMonth: (month: Date) => {},
});

export const AdminCalendar = () => {
  const [today, setToday] = useState(startOfToday());
  const [month, setMonth] = useState(startOfMonth(startOfToday()));
  const dateValue = useMemo(
    () => ({ date: today, setDate: setToday }),
    [today, setToday]
  );
  const monthValue = useMemo(
    () => ({ month: month, setMonth: setMonth }),
    [month, setMonth]
  );

  return (
    <>
      <MonthContext.Provider value={monthValue}>
        <DateContext.Provider value={dateValue}>
          <CalendarContainer>
            <ChevronComponent direction="left" />
            <CalendarHeader>
              <Text dim small>
                {format(monthValue.month, "yyyy")}
              </Text>
              <Text>
                {firstLetterToUpperCase(
                  format(monthValue.month, "MMMM", { locale: sv })
                )}
              </Text>
            </CalendarHeader>
            <ChevronComponent direction="right" />
            <CalendarDays>
              <Text dim small gridArea="mon">
                Mån
              </Text>
              <Text dim small gridArea="tue">
                Tis
              </Text>
              <Text dim small gridArea="wed">
                Ons
              </Text>
              <Text dim small gridArea="thu">
                Tor
              </Text>
              <Text dim small gridArea="fri">
                Fre
              </Text>
              <Text dim small gridArea="sat">
                Lör
              </Text>
              <Text dim small gridArea="sun">
                Sön
              </Text>
            </CalendarDays>
            <CalendarDates />
          </CalendarContainer>
          <Text>
            Bokningar {format(today, "EEEE d MMMM yyy", { locale: sv })}.
          </Text>
        </DateContext.Provider>
      </MonthContext.Provider>
    </>
  );
};

const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
