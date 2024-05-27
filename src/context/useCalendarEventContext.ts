import { useContext } from "react";
import { CalendarEventContext } from "./CalendarEventContext";

export function useCalendarEventContext() {
  const calendarEventContext = useContext(CalendarEventContext);
  if (calendarEventContext === null) {
    throw Error("Users are null");
  }

  return calendarEventContext;
}
