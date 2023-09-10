import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useTodoContext } from "./GrandLayout";

const CalendarComp = () => {
  const { selectedDate, handleMonthChange, handleDateClick } = useTodoContext();
  const [minDate, setMinDate] = useState(new Date());

  return (
    <div className="">
      <input
        className="outline-none border-[1px] rounded-[8px] border-[#999999] p-2 h-[40px] w-[200px] font-workSans text-[14px] "
        readOnly
        value={
          selectedDate !== null
            ? selectedDate?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : format(new Date(), "MMM dd, yyyy")
        }
      />
      <Calendar
        onChange={handleDateClick}
        onShownDateChange={handleMonthChange}
        className="border-[#999999] shadow-lg border-[1px] rounded-[8px] font-workSans z-50 "
        color="#3F5BF6"
        rangeColors={["#3F5BF6"]}
        minDate={minDate}
      />
    </div>
  );
};

export default CalendarComp;
