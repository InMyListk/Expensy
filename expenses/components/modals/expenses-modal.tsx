"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ListCollapse, MoreHorizontal } from "lucide-react";
import { DataTable } from "../data-table";
import { columns } from "../dataTable/columns";
import usefetchExpenses from "../hooks/useFetchExpenses";
import { useAuth } from "@clerk/nextjs";

type Props = {
  dayId: any;
  data: any;
};

export const ExpensesModal = ({ dayId, data }: Props) => {
  const { userId } = useAuth();
  if (!userId) {
    return null;
  }
  // const { data } = usefetchExpenses(userId, dayId);

  // console.log(data);
  return (
    <Dialog>
      <DialogTrigger onClick={() => {}}>
        <span className="sr-only">Open menu</span>
        <ListCollapse className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <DataTable columns={columns} data={data.expenses} />
      </DialogContent>
    </Dialog>
  );
};
