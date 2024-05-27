import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

export const CalendarEventContext = createContext<CalendarEventContext | null>(
  null
);

type TCalendarContextProvider = {
  children: ReactNode;
};

export const CalendarContextProvider = ({
  children,
}: TCalendarContextProvider) => {
  const [events, setEvents] = useState<Events[]>(() => {
    const storedEvents = localStorage.getItem("calendarEvents");
    if (storedEvents) {
      return JSON.parse(storedEvents);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const addNewEvent = (date: string, newEvent: Event) => {
    setEvents((oldEvents) => {
      let isObjectPresent = oldEvents.find((event) => event.date == date);
      if (isObjectPresent === undefined) {
        return [
          ...oldEvents,
          { id: crypto.randomUUID(), date, event: [newEvent] },
        ];
      }
      const newEvents = oldEvents.map((event) => {
        if (event.date === date) {
          event.event = [...event.event, newEvent];
        }
        return event;
      });
      return newEvents;
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

  return (
    <CalendarEventContext.Provider value={{ events, addNewEvent, editEvent }}>
      {" "}
      {children}
    </CalendarEventContext.Provider>
  );
};
