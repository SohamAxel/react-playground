import { format, isToday } from "date-fns";
import AddEventForm from "./AddEventForm";
import { createPortal } from "react-dom";
import { useState } from "react";

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
        {/* <button className="all-day-event blue event">
          <div className="event-name">Short</div>
        </button>
        <button className="all-day-event green event">
          <div className="event-name">
            Long Event Name That Just Keeps Going
          </div>
        </button>
        <button className="event">
          <div className="color-dot blue"></div>
          <div className="event-time">7am</div>
          <div className="event-name">Event Name</div>
        </button> */}
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
            <AddEventForm />
          </div>
        </div>,
        modalsElement
      )
    : null;
};

export default CalendarDay;
