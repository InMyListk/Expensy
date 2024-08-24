import { useState } from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { AddExpensesForm } from "./add-expenses-form";

import { Plus } from "lucide-react";

export const AddExpenses = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <Sheet
      onOpenChange={(event) => {
        setIsOpen(event);
      }}
    >
      <SheetTrigger
        style={{
          border: isOpen && "1px solid blue",
          padding: isOpen && "0.875rem",
        }}
        className="border p-3 duration-200 rounded-md cursor-pointer"
      >
        <Plus />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        aria-describedby={undefined}
        className="pt-14 text-right"
      >
        <SheetTitle className="text-2xl font-bold"> اضف مصروف</SheetTitle>
        <AddExpensesForm />
      </SheetContent>
    </Sheet>
  );
};
