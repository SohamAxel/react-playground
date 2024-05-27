import { format, isToday } from "date-fns";
import AddEventForm from "./AddEventForm";
import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { cc } from "../utils/cc";
import { Event } from "../context/CalendarEventContext";
import { useCalendarEventContext } from "../context/useCalendarEventContext";

type CalendarDay = {
  date: Date;
  weekHeader?: string;
};

type AddEventModalForm = {
  hideModal: () => void;
  date: Date;
  event?: Event;
};

const CalendarDay = ({ date, weekHeader }: CalendarDay) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const day = date.getDate();
  const { events } = useCalendarEventContext();
  const eventData = useRef<Event>();
  const thisDayEvents = events.find(
    (event) => event.date === date.toDateString()
  );

  const hideModal = () => {
    setShowEventForm(false);
    eventData.current = undefined;
  };

  const handleEventEdit = (id: React.Key) => {
    if (thisDayEvents != undefined) {
      eventData.current = thisDayEvents.event.find((event) => event.id == id);
      setShowEventForm(true);
    }
  };

  return (
    <>
      <div className="day-header">
        {weekHeader && <div className="week-name">{weekHeader}</div>}
        {/* <div className={`day-number ${isToday(date) ? "today" : undefined}`}> */}
        <div className={cc("day-number", isToday(date) && "today")}>{day}</div>
        <button
          className="add-event-btn"
          onClick={() => setShowEventForm(true)}
        >
          +
        </button>
      </div>
      <div className="events">
        {thisDayEvents === undefined
          ? undefined
          : thisDayEvents.event.map((event) => {
              if (event.allDay)
                return (
                  <button
                    key={event.id}
                    className={`all-day-event ${event.color} event`}
                    onClick={() => handleEventEdit(event.id)}
                  >
                    <div className="event-name">{event.name}</div>
                  </button>
                );
            })}
        {thisDayEvents === undefined
          ? undefined
          : thisDayEvents.event.map((event) => {
              if (!event.allDay) {
                return (
                  <button
                    key={event.id}
                    className="event"
                    onClick={() => handleEventEdit(event.id)}
                  >
                    <div className={`color-dot ${event.color}`}></div>
                    <div className="event-time">{event.startTime}</div>
                    <div className="event-name">{event.name}</div>
                  </button>
                );
              }
            })}
      </div>
      {showEventForm && (
        <AddEventModalForm
          hideModal={hideModal}
          date={date}
          event={
            eventData.current !== undefined ? eventData.current : undefined
          }
        />
      )}
    </>
  );
};

const AddEventModalForm = ({ hideModal, date, event }: AddEventModalForm) => {
  const modalsElement = document.querySelector("#root");
  return modalsElement
    ? createPortal(
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-body">
            <div className="modal-title">
              <div>Add Event</div>
              <small>{format(date, "d/M/yy")}</small>
              <button className="close-btn" onClick={hideModal}>
                &times;
              </button>
            </div>
            <AddEventForm
              date={date.toDateString()}
              hideModal={hideModal}
              editEventData={event}
            />
          </div>
        </div>,
        modalsElement
      )
    : null;
};

export default CalendarDay;
