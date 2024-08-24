import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  table: any;
};

export const PaginationButtons = ({ table }: Props) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4 px-3">
      <Button
        variant="outline"
        size="lg"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        اللاحق
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        التالي
      </Button>
    </div>
  );
};
