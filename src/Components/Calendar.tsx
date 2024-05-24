import React, { createContext, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isAfter,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import CalendarDay from "./CalendarDay";

type Events = {
  id: React.Key;
  date: Date;
  event: {
    id: React.Key;
    color: "red" | "blue" | "green";
  } & (
    | { allDay: true }
    | {
        allDay: false;
        startTime: number;
        endTime: number;
      }
  );
};

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = () => {
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const [events, setEvents] = useState<Events[]>([]);
  const today = new Date();

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  const goToNextMonth = () => {
    setVisibleMonth((currentMonth) => addMonths(currentMonth, +1));
  };
  const goToPrevMonth = () => {
    setVisibleMonth((currentMonth) => addMonths(currentMonth, -1));
  };

  const goToCurrentMonth = () => {
    setVisibleMonth(today);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        date={visibleMonth}
        goToNextMonth={goToNextMonth}
        goToPrevMonth={goToPrevMonth}
        goToCurrentMonth={goToCurrentMonth}
      />
      <div className="days">
        {visibleDates.map((date, index) => {
          return (
            <div
              key={date.toDateString()}
              className={`day ${
                isSameMonth(date, visibleMonth) ? undefined : "non-month-day"
              } ${
                isAfter(date, today) || isSameDay(date, today)
                  ? undefined
                  : "old-month-day"
              }`}
            >
              <CalendarDay
                date={date}
                weekHeader={index < 8 ? weekDays[index] : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
