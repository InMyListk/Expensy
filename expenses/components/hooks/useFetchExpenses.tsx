"use client";

import useSWR from "swr";

type Expenses = {
  name: string;
  date: string;
  category: string;
  price: number;
};

const fetcher = async (userId: string, dayId: number) => {
  const responce = await fetch("http://192.168.1.2:4000/api/v0/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, dayId: dayId }),
  });
  const newData = await responce.json();

  return newData;
};

const usefetchExpenses = (userId: string, dayId: number) => {
  if (!userId) {
    return { data: null };
  }
  console.log(dayId);
  const { data, error, isLoading } = useSWR("expenses", () =>
    fetcher(userId, dayId)
  );
  console.log(data);
  return { data: data, error, isLoading };
};

export default usefetchExpenses;
