"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/dataTable/daysColumns";
import React from "react";
import { SelectDate } from "./select";
import usefetchDataTable from "@/components/hooks/useFetchDataTable";

const ExpensesPage = () => {
  const router = useRouter();
  const { userId } = useAuth();
  if (!userId) {
    return router.push("/");
  }

  const { data } = usefetchDataTable(userId);
  let totalMonth = 0;
  if (data) {
    totalMonth = data.reduce((acc: any, item: any) => acc + item.total, 0);
  }
  console.log(totalMonth);

  return (
    <div className="w-full max-h-[200px]">
      <div className="w-full">
        <div className="mx-auto max-w-[600px] space-y-5 pt-5 px-2">
          {/* <div className="flex justify-end gap-x-5 w-full">
            <SelectDate
              type="month"
              placeHolder="الشهر"
              initialValue=""
              data={[{}, {}]}
            />
            <SelectDate
              type="year"
              placeHolder="السنة"
              initialValue=""
              data={[{}, {}]}
            />
          </div> */}
          <div>
            <DataTable columns={columns} data={data || []} />
          </div>
          <div className="w-full flex justify-end">
            <p className="text-xl font-semibold">
              EGP مصروفات الشهر : {totalMonth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
