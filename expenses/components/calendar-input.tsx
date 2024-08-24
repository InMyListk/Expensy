import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { CalendarArrowUp, CalendarCheck } from "lucide-react";

type Props = {
  register: any;
  controller: any;
  field: any;
};

export const CallendarInput = ({ register, controller, field }: Props) => {
  // const currentDate = new Date();
  const [selected, setSelected] = useState();

  const date = selected
    ? new Date(String(selected)).toDateString()
    : "اختر تاريخ";
  return (
    <Popover>
      <PopoverTrigger className="w-full border p-2 flex flex-row-reverse justify-between">
        {date}
        {!selected ? <CalendarArrowUp /> : <CalendarCheck />}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(e: any) => {
            setSelected(e);
            field.onChange(e);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
