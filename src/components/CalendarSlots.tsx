import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarSlots = (props: any) => {
  const [value, onValueChange] = useState(new Date());

  return (
    <div className="flex">
      <Calendar onChange={onValueChange} minDate={new Date()} value={value} />
    </div>
  );
};

export default CalendarSlots;
