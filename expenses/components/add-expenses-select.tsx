import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  control: any;
  Controller: any;
};

export const AddExpensesSelect = ({ Controller, control }: Props) => {
  return (
    <Controller
      control={control}
      name="category"
      render={({ field }: any) => {
        {
          return (
            <Select onValueChange={field.onChange}>
              <SelectTrigger className="w-full flex-row-reverse">
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الطعام">الطعام</SelectItem>
                <SelectItem value="الشراب">الشراب</SelectItem>
                <SelectItem value="المواصلات">المواصلات</SelectItem>
                <SelectItem value="اخري">اخري</SelectItem>
              </SelectContent>
            </Select>
          );
        }
      }}
    />
  );
};
