import React, { useState } from "react";
import { getDaysInMonth, format, isToday, getTime } from "date-fns";

const CustomDatePickerCalendar = ({ timestamp, setTimestamp }) => {
  const [openedMonth, setOpenedMonth] = useState(new Date(timestamp));
  const selectedDate = new Date(timestamp);

  const isDateSelected = (date) => {
    return date.getTime() === selectedDate.getTime();
  };

  const handleDayClick = (day) => {
    setTimestamp(
      getTime(new Date(openedMonth.getFullYear(), openedMonth.getMonth(), day))
    );
    // setSelectedDate(
    //   new Date(openedMonth.getFullYear(), openedMonth.getMonth(), day)
    // );
  };

  const handleNextMonth = () => {
    setOpenedMonth(
      (currentMonth) =>
        new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };
  const handlePrevMonth = () => {
    setOpenedMonth(
      (currentMonth) =>
        new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  const printDays = () => {
    let daysButton = [];
    for (let i = 1; i <= getDaysInMonth(openedMonth); i++) {
      daysButton.push(
        <button
          className={`date ${
            isToday(
              new Date(openedMonth.getFullYear(), openedMonth.getMonth(), i)
            )
              ? "today"
              : undefined
          } 
          ${
            isDateSelected(
              new Date(openedMonth.getFullYear(), openedMonth.getMonth(), i)
            )
              ? "selected"
              : false
          }`}
          key={i}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </button>
      );
    }
    return daysButton;
  };

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={handlePrevMonth}
        >
          &larr;
        </button>
        <div className="current-month">{format(openedMonth, "MMM - yyyy")}</div>
        <button
          className="next-month-button month-button"
          onClick={handleNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {/* <button className="date date-picker-other-month-date">28</button>
        <button className="date date-picker-other-month-date">29</button>
        <button className="date date-picker-other-month-date">30</button>
        <button className="date date-picker-other-month-date">31</button> */}
        {printDays().map((d) => d)}
        <button className="date date-picker-other-month-date">1</button>
      </div>
    </div>
  );
};

export default CustomDatePickerCalendar;
