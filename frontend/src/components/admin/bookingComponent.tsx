import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { ICustomer } from "../../models/ICustomer";
import {
  Button,
  CredentialsContainer,
  Input,
  InputContainer,
  Label,
  Text,
} from "../styled/adminStyled";
import { TimeComponent } from "./timeComponent";

export const BookingComponent = () => {
  const { bookingID } = useParams();
  const [booking, setBooking] = useState<IBooking>();
  const [customer, setCustomer] = useState<ICustomer>();
  const [goToChangeBooking, setGoToChangeBooking] = useState(false);
  const [goToNextBookingScreen, setGoToNextBookingScreen] = useState(false);

  const [availableTables, setAvailableTables] = useState({
    available_18: true,
    available_21: true,
  });

  const updateBooking = (time: string) => {
    if (booking) {
      const date = booking.date;

      axios
        .put("http://localhost:2500/api/booking/update", {
          quantity: booking.quantity,
          date,
          time: booking.time,
          tables: Math.ceil(booking.quantity / 6),
          name: customer?.name,
          email: customer?.email,
          phone: customer?.phone,
          bookingID: booking.bookingID,
          customer: booking.customer,
        })
        .then(function (response) {
          console.log(response.data);

          setBooking(response.data.updatedBooking);
          setGoToChangeBooking(false);
          setGoToNextBookingScreen(false);
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
  };

  const getBooking = async (bookingID: string) => {
    const response = await fetch(
      `http://localhost:2500/api/booking/get?q=${bookingID}`
    );
    const booking = await response.json();
    const res = await fetch(
      `http://localhost:2500/api/booking/get-customer?customer=${booking[0].customer}`
    );
    const data = await res.json();
    setCustomer(data);

    setBooking(booking[0]);
  };

  const cancelSubmission = () => {
    setGoToChangeBooking(false);
    setGoToNextBookingScreen(false);
  };

  const changeBooking = () => {
    setGoToChangeBooking(true);
  };

  const changeBookingStageOne = () => {
    if (booking) {
      axios
        .post("http://localhost:2500/api/booking/search", {
          quantity: booking.quantity,
          date: booking.date,
        })
        .then((response) => {
          setGoToNextBookingScreen(true);
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
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email" || name === "name" || name === "phone") {
      setCustomer({ ...customer!, [name]: value });
    } else {
      setBooking({ ...booking!, [name]: value });
    }
  };

  const deleteBooking = () => {
    if (booking) {
      axios
        .delete(`http://localhost:2500/api/booking/delete/${booking.bookingID}`)
        .then((response) => {
          console.log(response.data.message);
          window.location.href = "/admin";
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
  };

  useEffect(() => {
    getBooking(bookingID as string);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {goToChangeBooking ? (
        <>
          <Text>Bokningsnummer: #{booking?.bookingID}</Text>
          <CredentialsContainer>
            <InputContainer halfWidth>
              <Label>Namn</Label>
              <Input
                type="text"
                name="name"
                value={customer?.name}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer halfWidth>
              <Label>Telefonnummer</Label>
              <Input
                type="tel"
                name="phone"
                value={customer?.phone}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer fullWidth>
              <Label>E-post</Label>
              <Input
                type="email"
                name="email"
                value={customer?.email}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Datum</Label>
              <Input
                type="date"
                name="date"
                value={booking?.date}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Antal</Label>
              <Input
                type="number"
                name="quantity"
                value={booking?.quantity}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>&nbsp;</Label>
              <Button onClick={changeBookingStageOne}>Fortsätt</Button>
            </InputContainer>
          </CredentialsContainer>
          {goToNextBookingScreen ? (
            <>
              <TimeComponent
                change
                availableTables={availableTables}
                onSubmit={updateBooking}
                cancel={cancelSubmission}
              />
            </>
          ) : null}
        </>
      ) : (
        <>
          <Text>Bokningsnummer: #{booking?.bookingID}</Text>
          <Text>Namn: {customer?.name}</Text>
          <Text>Telefonnummer: {customer?.phone}</Text>
          <Text>E-post: {customer?.email}</Text>
          <Text>Tid: {booking?.time}</Text>
          <Text>Datum: {booking?.date}</Text>
          <Text>Antal Platser: {booking?.quantity}</Text>
          <Button type="button" onClick={changeBooking}>
            Ändra
          </Button>
          <Button type="button" onClick={deleteBooking}>
            Ta Bort
          </Button>
        </>
      )}
    </>
  );
};
