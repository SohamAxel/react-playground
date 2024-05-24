import { ReactNode } from "react";

type EventFormGroup = {
  children: ReactNode;
  checkbox?: boolean;
};

const EventFormGroup = ({ children, checkbox }: EventFormGroup) => {
  return (
    <div className={`form-group ${checkbox ? "checkbox" : undefined} `}>
      {children}
    </div>
  );
};

export default EventFormGroup;
