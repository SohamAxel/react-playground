import { isSameMonth, isToday } from "date-fns";

type CalendarDay = {
  date: Date;
  weekHeader?: string;
};

const CalendarDay = ({ date, weekHeader }: CalendarDay) => {
  const day = date.getDate();

  return (
    <>
      <div className="day-header">
        {weekHeader && <div className="week-name">{weekHeader}</div>}
        <div className={`day-number ${isToday(date) ? "today" : undefined}`}>
          {day}
        </div>
        <button className="add-event-btn">+</button>
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
    </>
  );
};

export default CalendarDay;
