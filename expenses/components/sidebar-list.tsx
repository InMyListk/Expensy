import React from "react";
import { SidebarItem } from "./sidebar-item";
import { cn } from "@/lib/utils";
import { AddExpenses } from "./add-expense";

type Props = {
  className?: string;
};

export const SidebarList = ({ className }: Props) => {
  return (
    <div className={cn("flex items-center gap-y-2", className)}>
      <SidebarItem label="table" imageSrc="/icons/table.svg" href="/expenses" />
      <SidebarItem
        label="chart"
        imageSrc="/icons/chart-graph.svg"
        href="/analysis"
      />
      <AddExpenses />
      {/* <SidebarItem /> */}
    </div>
  );
};
