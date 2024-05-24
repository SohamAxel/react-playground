import { FormEvent, useEffect, useRef, useState } from "react";
import EventFormGroup from "./EventFormGroup";
import { Color, Event, getCalendarEventContext } from "./Calendar";

type FormErrors = {
  name?: string;
  allDay?: string;
  color?: string;
};

type EventData = {
  name?: string;
  color?: string;
};

const AddEventForm = ({
  date,
  hideModal,
  editEventData,
}: {
  date: string;
  hideModal: () => void;
  editEventData?: Event;
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [isAllDayChecked, setAllDayChecked] = useState(
    editEventData?.allDay ?? false
  );
  const colorRef = useRef<Color>();
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    allDay: "",
    color: "",
  });
  const { addNewEvent, editEvent } = getCalendarEventContext();

  const handleChangeColor = (color: Color) => {
    colorRef.current = color;
  };

  const validateForm = (event: EventData) => {
    let error: FormErrors = {};
    if (event.name === "") {
      error.name = "Required";
    }

    if (!event.color) {
      error.color = "Required";
    }
    return error;
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventData: EventData = {
      name: nameRef.current?.value,
      color: colorRef.current,
    };
    const error = validateForm(eventData);
    if (Object.keys(error).length != 0) {
      setFormErrors(error);
    } else {
      let newEvent: Event = {
        id: crypto.randomUUID(),
        name: nameRef.current ? nameRef.current.value : "",
        color: colorRef.current ? colorRef.current : "blue",
        allDay: isAllDayChecked,
        startTime: isAllDayChecked ? "" : startTimeRef.current?.value,
        endTime: isAllDayChecked ? "" : endTimeRef.current?.value,
      };
      if (editEventData) {
        editEvent(date, {
          ...newEvent,
          id: editEventData.id,
        });
      } else {
        addNewEvent(date, newEvent);
      }
      hideModal();
    }
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
          defaultValue={editEventData ? editEventData.name : ""}
        />
        {formErrors.name && <p>{formErrors.name}</p>}
      </EventFormGroup>
      <EventFormGroup checkbox>
        <input
          type="checkbox"
          name="all-day"
          id="all-day"
          checked={isAllDayChecked}
          onChange={() => setAllDayChecked((d) => !d)}
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
            ref={startTimeRef}
            defaultValue={
              editEventData && !editEventData.allDay
                ? editEventData.startTime
                : ""
            }
          />
        </EventFormGroup>
        <EventFormGroup>
          <label htmlFor="end-time">End Time</label>
          <input
            type="time"
            name="end-time"
            id="end-time"
            disabled={isAllDayChecked}
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
          <input
            type="radio"
            name="color"
            value="blue"
            id="blue"
            className="color-radio"
            onChange={() => handleChangeColor("blue")}
          />
          <label htmlFor="blue">
            <span className="sr-only">Blue</span>
          </label>
          <input
            type="radio"
            name="color"
            value="red"
            id="red"
            className="color-radio"
            onChange={() => handleChangeColor("red")}
          />
          <label htmlFor="red">
            <span className="sr-only">Red</span>
          </label>
          <input
            type="radio"
            name="color"
            value="green"
            id="green"
            className="color-radio"
            onChange={() => handleChangeColor("green")}
          />
          <label htmlFor="green">
            <span className="sr-only">Green</span>
          </label>
          {formErrors.color && <p>{formErrors.color}</p>}
        </div>
      </EventFormGroup>
      <div className="row">
        <button className="btn btn-success" type="submit">
          Add
        </button>
        <button className="btn btn-delete" type="button">
          Delete
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
