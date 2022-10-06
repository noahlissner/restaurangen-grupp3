import axios from "axios";
import { format, startOfMonth, startOfToday } from "date-fns";
import { sv } from "date-fns/locale";
import { createContext, useMemo, useState } from "react";
import { IBooking } from "../../models/IBooking";
import {
  CalendarContainer,
  CalendarDays,
  CalendarHeader,
  Text,
} from "../styled/adminStyled";
import { Bookings } from "./bookingsComponent";
import { CalendarDates } from "./calendarDatesComponent";
import { ChevronComponent } from "./chevronComponent";
import { CredentialsComponent } from "./credentialsComponent";
import { QuantityComponent } from "./quantityComponent";
import { TimeComponent } from "./timeComponent";

interface ISource {
  source: "calendar" | "create";
}

export const DateContext = createContext({
  date: startOfToday(),
  setDate: (date: Date) => {},
});

export const MonthContext = createContext({
  month: startOfMonth(startOfToday()),
  setMonth: (month: Date) => {},
});

export const AdminCalendar = ({ source }: ISource) => {
  const [today, setToday] = useState(startOfToday());
  const [month, setMonth] = useState(startOfMonth(startOfToday()));
  const [goToNextBookingScreen, setGoToNextBookingScreen] = useState(false);
  const [availableTables, setAvailableTables] = useState({
    available_18: true,
    available_21: true,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [booking, setBooking] = useState<IBooking>({
    date: "",
    time: "",
    bookingID: "",
    quantity: 0,
    tables: 0,
    customer: "",
  });

  const dateValue = useMemo(
    () => ({ date: today, setDate: setToday }),
    [today, setToday]
  );
  const monthValue = useMemo(
    () => ({ month: month, setMonth: setMonth }),
    [month, setMonth]
  );

  const handleSubmitOne = (amount: string) => {
    const date = format(today, "yyyy" + "-" + "MM" + "-" + "dd");

    axios
      .post("http://localhost:2500/api/booking/search", {
        quantity: amount,
        date,
      })
      .then((response) => {
        setGoToNextBookingScreen(true);
        setQuantity(amount);
        setAvailableTables(response.data);
        if (response.data.available_18 || response.data.available_21) {
          setGoToNextBookingScreen(true);
        } else {
          console.log("Inga lediga bord på valt datum.");
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const handleSubmitTwo = (time: string) => {
    const date = format(today, "yyyy" + "-" + "MM" + "-" + "dd");

    axios
      .post("http://localhost:2500/api/booking/create", {
        quantity,
        date,
        time,
        tables: Math.ceil(parseInt(quantity) / 6),
        name,
        email,
        phone,
        bookingID: Math.floor(Math.random() * 1000000),
      })
      .then(function (response) {
        setBooking(response.data.data);
        setShowConfirmation(true);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
  };

  const cancelSubmission = () => {
    setGoToNextBookingScreen(false);
  };

  return (
    <>
      <MonthContext.Provider value={monthValue}>
        <DateContext.Provider value={dateValue}>
          {source === "calendar" && (
            <>
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
              <Bookings list={format(today, "yyyy-MM-dd").toString()} />
            </>
          )}
          {source === "create" && (
            <>
              {!goToNextBookingScreen && (
                <>
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
                  <Text>Välj antal platser.</Text>
                  <QuantityComponent onSubmit={handleSubmitOne} />
                </>
              )}

              {goToNextBookingScreen && (
                <>
                  <Text>
                    Valt datum:{" "}
                    {firstLetterToUpperCase(
                      format(today, "EEEE d MMMM yyy", { locale: sv })
                    )}
                  </Text>
                  {!showConfirmation && (
                    <>
                      <CredentialsComponent
                        name={setName}
                        phone={setPhone}
                        email={setEmail}
                      />
                      <TimeComponent
                        availableTables={availableTables}
                        onSubmit={handleSubmitTwo}
                        cancel={cancelSubmission}
                      />
                    </>
                  )}
                  {showConfirmation && (
                    <>
                      <Text>Bokningsbekräftelse: #{booking.bookingID}</Text>
                    </>
                  )}
                </>
              )}
              {/* <Text>Välj tid.</Text> */}
              {/* <TimeComponent onSubmit={handleSubmitOne} /> */}
            </>
          )}
        </DateContext.Provider>
      </MonthContext.Provider>
    </>
  );
};

const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
