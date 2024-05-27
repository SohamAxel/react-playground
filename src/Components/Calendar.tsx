import React, { createContext, useContext, useState } from "react";
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

export const allowedColors = ["red", "blue", "green"] as const;
export type Color = (typeof allowedColors)[number];

export type Event = {
  id: React.Key;
  name: string;
  color: Color;
} & (
  | { allDay: true }
  | {
      allDay: false;
      startTime: string;
      endTime: string;
    }
);

export type Events = {
  id: React.Key;
  date: string;
  event: Event[];
};

type CalendarEventContext = {
  events: Events[];
  addNewEvent: (date: string, event: Event) => void;
  editEvent: (date: string, toUpdateEvent: Event) => void;
};

export const weekDays = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
] as const;

const CalendarEventContext = createContext<CalendarEventContext | null>(null);

export const getCalendarEventContext = () => {
  const calendarEventContext = useContext(CalendarEventContext);
  if (calendarEventContext === null) {
    throw Error("Users are null");
  }

  return calendarEventContext;
};

const Calendar = () => {
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const [events, setEvents] = useState<Events[]>([]);
  const today = new Date();
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  const addNewEvent = (date: string, newEvent: Event) => {
    setEvents((oldEvents) => {
      let isObjectPresent = oldEvents.find((event) => event.date == date);
      if (isObjectPresent === undefined) {
        return [
          ...oldEvents,
          { id: crypto.randomUUID(), date, event: [newEvent] },
        ];
      }
      return oldEvents.map((event) => {
        if (event.date === date) {
          event.event = [...event.event, newEvent];
        }
        return event;
      });
    });
  };

  const editEvent = (date: String, toUpdateEvent: Event) => {
    setEvents((oldEvents) => {
      return oldEvents.map((event) => {
        if (event.date == date) {
          let updatedEvents = event.event.map((eventItem) => {
            if (eventItem.id == toUpdateEvent.id) {
              return toUpdateEvent;
            }
            return eventItem;
          });
          return {
            ...event,
            event: updatedEvents,
          };
        }
        return event;
      });
    });
  };
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
        <CalendarEventContext.Provider
          value={{ events, addNewEvent, editEvent }}
        >
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
        </CalendarEventContext.Provider>
      </div>
    </div>
  );
};

export default Calendar;
