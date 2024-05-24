import { format, isToday } from "date-fns";
import AddEventForm from "./AddEventForm";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Event, getCalendarEventContext } from "./Calendar";

type CalendarDay = {
  date: Date;
  weekHeader?: string;
};

type AddEventModalForm = {
  hideModal: () => void;
  date: Date;
};

const CalendarDay = ({ date, weekHeader }: CalendarDay) => {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const day = date.getDate();
  const { events } = getCalendarEventContext();
  const thisDayEvents = events.find(
    (event) => event.date === date.toDateString()
  );

  const hideModal = () => {
    setShowAddEventForm(false);
  };

  return (
    <>
      <div className="day-header">
        {weekHeader && <div className="week-name">{weekHeader}</div>}
        <div className={`day-number ${isToday(date) ? "today" : undefined}`}>
          {day}
        </div>
        <button
          className="add-event-btn"
          onClick={() => setShowAddEventForm(true)}
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
                  <button key={event.id} className="event">
                    <div className={`color-dot ${event.color}`}></div>
                    <div className="event-time">{event.startTime}</div>
                    <div className="event-name">{event.name}</div>
                  </button>
                );
              }
            })}
      </div>
      {showAddEventForm && (
        <AddEventModalForm hideModal={hideModal} date={date} />
      )}
    </>
  );
};

const AddEventModalForm = ({ hideModal, date }: AddEventModalForm) => {
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
            <AddEventForm date={date.toDateString()} hideModal={hideModal} />
          </div>
        </div>,
        modalsElement
      )
    : null;
};

export default CalendarDay;
