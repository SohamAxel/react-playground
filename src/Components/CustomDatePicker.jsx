import React, { useState } from "react";
import CustomDatePickerCalendar from "./CustomDatePickerCalendar";
import { getTime, fromUnixTime, format } from "date-fns";

const CustomDatePicker = () => {
  const [timestamp, setTimestamp] = useState(
    getTime(new Date().setHours(0, 0, 0, 0))
  );
  const [showPicker, setShowPicker] = useState(true);

  return (
    <div className="date-picker-container">
      <button
        className="date-picker-button"
        onClick={() => setShowPicker((d) => !d)}
      >
        {format(timestamp, "MMM do, yyyy")}
      </button>
      {showPicker && (
        <CustomDatePickerCalendar
          timestamp={timestamp}
          key={timestamp}
          setTimestamp={setTimestamp}
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
