import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import BookingRadio from "../components/BookingRadio";

interface IProps {
  time: Dispatch<SetStateAction<string>>;
  name: Dispatch<SetStateAction<string>>;
  email: Dispatch<SetStateAction<string>>;
  phone: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent) => void;
}

const BookingScreenTwo = ({ time, name, email, phone, onSubmit }: IProps) => {
  const [timeChecked, setTimeChecked] = useState("");

  const handleRadioChange = (e: any) => {
    setTimeChecked(e.target.value);
    time(e.target.value);
  };

  const handleInputChange = (e: any) => {
    if (e.target.name === "name") name(e.target.value);
    if (e.target.name === "email") email(e.target.value);
    if (e.target.name === "phone") phone(e.target.value);
  };

  return (
    <section className="bookingTwo">
      <div className="bookingTwo__container">
        <h1>Tid & Information.</h1>
        <form
          onSubmit={onSubmit}
          className="bookingTwo__container__form-wrapper"
        >
          {/* Text Inputs */}
          <div className="bookingTwo__input-container">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Namn"
                className="bookingTwo-text-input"
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="bookingTwo-text-input"
                onChange={handleInputChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bookingTwo-text-input"
              onChange={handleInputChange}
            />
          </div>
          <div className="bookingTwo__radio-container">
            <h4>Tid</h4>
            <div>
              <BookingRadio
                value="18"
                checked={timeChecked}
                onChange={handleRadioChange}
                title="18:00"
                name="time"
              />
              <BookingRadio
                value="21"
                checked={timeChecked}
                onChange={handleRadioChange}
                title="21:00"
                name="time"
              />
            </div>
          </div>
          <button
            className="bookingTwo__container__form-wrapper__submit"
            type="submit"
          >
            Boka Bord
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingScreenTwo;
