import { FormEvent, Fragment, useRef, useState } from "react";
import EventFormGroup from "./EventFormGroup";
import { Color, Event, allowedColors } from "../context/CalendarEventContext";
import { useCalendarEventContext } from "../context/useCalendarEventContext";

type AddEventForm = {
  date: string;
  hideModal: () => void;
  editEventData?: Event;
};

const AddEventForm = ({ date, hideModal, editEventData }: AddEventForm) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [isAllDayChecked, setAllDayChecked] = useState(
    editEventData?.allDay ?? false
  );
  const [selectedColor, setSelectedColor] = useState<Color>(() => {
    if (editEventData == undefined) {
      return allowedColors[0];
    } else {
      return editEventData.color;
    }
  });
  const [startTime, setStartTime] = useState(() => {
    if (editEventData !== undefined && !editEventData.allDay) {
      return editEventData.startTime;
    } else {
      return "";
    }
  });
  const endTimeRef = useRef<HTMLInputElement>(null);
  const { addNewEvent, editEvent, deleteEvent } = useCalendarEventContext();

  const handleChangeColor = (color: Color) => {
    setSelectedColor(color);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value ?? "";
    const color = selectedColor;
    const id = crypto.randomUUID();
    let newEvent: Event;
    let commonProps = {
      id,
      name,
      color,
    };
    console.log(isAllDayChecked);
    if (isAllDayChecked) {
      newEvent = {
        ...commonProps,
        allDay: true,
      };
    } else {
      newEvent = {
        ...commonProps,
        allDay: false,
        startTime: startTime,
        endTime: endTimeRef.current?.value ?? "",
      };
    }
    if (editEventData) {
      editEvent(date, {
        ...newEvent,
        id: editEventData.id,
      });
    } else {
      addNewEvent(date, newEvent);
    }
    hideModal();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <EventFormGroup>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          ref={nameRef}
          required
          defaultValue={editEventData ? editEventData.name : ""}
        />
      </EventFormGroup>
      <EventFormGroup checkbox>
        <input
          type="checkbox"
          name="all-day"
          id="all-day"
          checked={isAllDayChecked}
          onChange={(e) => setAllDayChecked(e.target.checked)}
        />
        <label htmlFor="all-day">All Day?</label>
      </EventFormGroup>
      <div className="row">
        <EventFormGroup>
          <label htmlFor="start-time">Start Time</label>
          <input
            type="time"
            name="start-time"
            id="start-time"
            disabled={isAllDayChecked}
            required={!isAllDayChecked}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </EventFormGroup>
        <EventFormGroup>
          <label htmlFor="end-time">End Time</label>
          <input
            type="time"
            name="end-time"
            min={startTime}
            id="end-time"
            disabled={isAllDayChecked}
            required={!isAllDayChecked}
            ref={endTimeRef}
            defaultValue={
              editEventData && !editEventData.allDay
                ? editEventData.endTime
                : ""
            }
          />
        </EventFormGroup>
      </div>
      <EventFormGroup>
        <label>Color</label>
        <div className="row left">
          {allowedColors.map((color) => (
            <Fragment key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                id={color}
                className="color-radio"
                checked={selectedColor == color}
                onChange={() => handleChangeColor(color)}
              />
              <label htmlFor={color}>
                <span className="sr-only">{color}</span>
              </label>
            </Fragment>
          ))}
        </div>
      </EventFormGroup>
      <div className="row">
        <button className="btn btn-success" type="submit">
          {editEventData !== undefined ? "Save" : "Add"}
        </button>
        {editEventData !== undefined && (
          <button
            className="btn btn-delete"
            type="button"
            onClick={() => {
              deleteEvent(date, editEventData.id);
              hideModal();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default AddEventForm;
