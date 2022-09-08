import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import BookingRadio from "../components/BookingRadio";
import moment from "moment";

interface IProps {
  date: Dispatch<SetStateAction<string>>;
  quantity: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent) => void;
}

const BookingScreenOne = ({ onSubmit, quantity, date }: IProps) => {
  const [amountChecked, setAmountChecked] = useState("");
  const [amountCustomValue, setAmountCustomValue] = useState("");

  const [dateChecked, setDateChecked] = useState("");

  const handleRadioChange = (e: any) => {
    setAmountCustomValue("");
    setAmountChecked(e.target.value);
    quantity(e.target.value);
  };

  const handleRadioCustomChange = (e: any) => {
    setAmountChecked("");
    setAmountCustomValue(e.target.value);
    quantity(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDateChecked(e.target.value);
    date(e.target.value);
  };

  return (
    <section className="bookingOne">
      <div className="bookingOne__container">
        <h1>Hitta lediga bord.</h1>

        <form
          onSubmit={onSubmit}
          className="bookingOne__container__form-wrapper"
        >
          {/* Checkboxes */}
          <div>
            <h4>Antal</h4>
            <div className="bookingOne-radio-container">
              {["1", "2", "3", "4", "5", "6"].map((number) => (
                <BookingRadio
                  name="amount"
                  key={number}
                  value={number}
                  title={number}
                  checked={amountChecked}
                  onChange={handleRadioChange}
                />
              ))}
              <div className="bookingOne-radio-container__custom">
                <input
                  type="number"
                  placeholder="Ange"
                  value={amountCustomValue}
                  onChange={handleRadioCustomChange}
                />
              </div>
            </div>
          </div>
          {/* Date */}
          <div>
            <h4>Datum</h4>
            <div className="bookingOne-date-container">
              <BookingRadio
                name="amount"
                value={moment().format("YYYY-MM-DD")}
                title="Idag"
                checked={dateChecked}
                onChange={handleDateChange}
              />
              <BookingRadio
                name="amount"
                value={moment().add(1, "days").format("YYYY-MM-DD")}
                title="Imorgon"
                checked={dateChecked}
                onChange={handleDateChange}
              />
              <input
                type="date"
                className="date-picker"
                onChange={handleDateChange}
              />
            </div>
          </div>
          <button
            className="bookingOne__container__form-wrapper__submit"
            type="submit"
          >
            Sök Bord
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingScreenOne;
