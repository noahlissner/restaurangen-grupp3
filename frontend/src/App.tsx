import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/NotFound";
import { Booking } from "./components/pages/Booking";

// make a function to get calender date
function getCalenderDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

// make a function to get this month dates
function getThisMonthDates() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayWeekDay = firstDay.getDay();
  const lastDayWeekDay = lastDay.getDay();
  const lastDayOfMonth = lastDay.getDate();
  const firstDayOfMonth = firstDay.getDate();
  const dates = [];
  for (let i = 0; i < firstDayWeekDay; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= lastDayOfMonth; i++) {
    dates.push(i);
  }
  for (let i = 0; i < 7 - lastDayWeekDay; i++) {
    dates.push(null);
  }
  return dates;
}

function App() {
  const [calenderDate, setCalenderDate] = React.useState(getThisMonthDates());
  return (
    <>
      <div className="App">{calenderDate}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
