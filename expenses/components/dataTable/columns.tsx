"use client";

import { ColumnDef } from "@tanstack/react-table";
import { X } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Expenses = {
  id?: string;
  name: string;
  category: string;
  price: number;
  date: string;
};

export const columns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "deleteExpense",
    header: "حذف",
    cell: ({ row }) => {
      const expenseId = row.original.id;
      const deletExpense = async () => {
        await fetch(`http://192.168.1.2:4000/api/v0/delete/${expenseId}`, {
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
    accessorKey: "date",
    header: "التاريخ",
  },
  {
    accessorKey: "category",
    header: "النوع",
  },
  {
    accessorKey: "price",
    header: "السعر",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "الاسم",
  },
];
