"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableDropdwon } from "../dataTable-dropdown";
import { ExpensesModal } from "../modals/expenses-modal";
import { X } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Expenses = {
  id?: number;
  date: string;
  total: number;
  exenses: Expenses[];
};

export const columns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "deleteDay",
    header: "حذف",
    cell: ({ row }) => {
      const dayId = row.original.id;
      const deletExpense = async () => {
        await fetch(`http://192.168.1.2:4000/api/v0/deleteday/${dayId}`, {
          method: "GET",
        });
      };
      return (
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={deletExpense}
        >
          <X />
        </div>
      );
    },
  },
  {
    accessorKey: "epenses",
    header: "المصروفات",
    cell: ({ row }) => {
      const day = row.original;
      return <ExpensesModal data={day} dayId={day.id} />;
    },
  },
  {
    accessorKey: "date",
    header: "التاريخ",
  },
  {
    accessorKey: "total",
    header: "الاجمالي",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"));
      const formatted = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
