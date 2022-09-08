import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface IProps {
  time: Dispatch<SetStateAction<string>>;
  name: Dispatch<SetStateAction<string>>;
  email: Dispatch<SetStateAction<string>>;
  phone: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent) => void;
}

const BookingScreenTwo = ({ time, name, email, phone, onSubmit }: IProps) => {
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
                placeholder="Namn"
                className="bookingTwo-text-input"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="bookingTwo-text-input"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bookingTwo-text-input"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingScreenTwo;
