import { format } from "date-fns";

type CalendarHeader = {
  date: Date;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  goToCurrentMonth: () => void;
};

const CalendarHeader = ({
  date,
  goToNextMonth,
  goToPrevMonth,
  goToCurrentMonth,
}: CalendarHeader) => {
  return (
    <div className="header">
      <button className="btn" onClick={goToCurrentMonth}>
        Today
      </button>
      <div>
        <button className="month-change-btn" onClick={goToPrevMonth}>
          &lt;
        </button>
        <button className="month-change-btn" onClick={goToNextMonth}>
          &gt;
        </button>
      </div>
      <span className="month-title">{format(date, "MMMM yyyy")}</span>
    </div>
  );
};

export default CalendarHeader;
