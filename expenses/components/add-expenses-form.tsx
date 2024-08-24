"use client";
import { useAuth } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

import { useForm, Controller } from "react-hook-form";

import { AddExpensesSelect } from "./add-expenses-select";
import { Button } from "./ui/button";
import { CallendarInput } from "./calendar-input";
import { CheckCircle, Coins, Loader } from "lucide-react";

type ExpensesType = {
  name: string;
  date: string;
  price: number;
  category: string;
};

export const AddExpensesForm = () => {
  const router = useRouter();

  const { userId } = useAuth();

  if (!userId) {
    return router.push("/");
  }

  const { register, control, handleSubmit } = useForm<ExpensesType>();

  const [pending, setTransision] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ExpensesType) => {
    const currentDate = new Date();

    setTransision(async () => {
      try {
        const response = await fetch("http://192.168.1.2:4000/api/v0/add", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            date: !data.date ? currentDate : data.date,
            userId: userId,
          }),
        });

        if (response.ok) {
          const newDate = await response.json();
          if (newDate.success) {
            setIsSuccess(true);
          }
        } else {
          console.error(
            "Request failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <div className="space-y-5 pt-4">
        <div>
          <h2 className="font-bold text-muted-foreground">التاريخ</h2>
          <div className="flex justify-end pt-3">
            <Controller
              control={control}
              name="date"
              render={({ field }) => {
                return (
                  <CallendarInput
                    register={register}
                    controller={Controller}
                    field={field}
                  />
                );
              }}
            ></Controller>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-muted-foreground">الاسم</h2>
          <div className="flex justify-end pt-3">
            <input
              className="w-full border p-2 text-right"
              placeholder="الاسم"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-muted-foreground">السعر</h2>
          <div className="flex justify-between relative items-center pt-3">
            <Coins className=" text-yellow-500 right-2 absolute" />
            <input
              className="w-full border p-2 text-right px-10"
              placeholder="0.00"
              type="number"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-muted-foreground">النوع</h2>
          <div className="flex justify-between relative items-center pt-3">
            <AddExpensesSelect control={control} Controller={Controller} />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Button
          className="w-full font-bold text-md flex gap-x-3 bg-blue-500 hover:bg-blue-500/80"
          size={"lg"}
          disabled={pending}
        >
          {pending && <Loader className=" animate-spin w-5 h-5" />}
          {!pending && isSuccess && <CheckCircle className="text-green-300" />}
          اضف مصروف
        </Button>
      </div>
    </form>
  );
};
