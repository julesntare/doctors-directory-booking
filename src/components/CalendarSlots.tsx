import React, { useState } from "react";
import { ChangeEvent } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AvailableHours from "../features/GenerateAvailability";

const CalendarSlots = (props: any) => {
  const [value, onValueChange] = useState(new Date());

  const onCalendarChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex">
      <Calendar onChange={onValueChange} minDate={new Date()} value={value} />
      <div className="w-100 flex justify-center">
        <div className="mb-3">
          <select
            className="form-select appearance-none
      block
      px-1
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option defaultValue={""}>Time</option>
            {AvailableHours(
              Object.values(props.availability[0]),
              props.interval
            ).map((hour, i) => (
              <option value={String(hour)} key={i}>
                {hour}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CalendarSlots;
