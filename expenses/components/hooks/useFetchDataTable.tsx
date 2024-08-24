"use client";

import useSWR from "swr";

type Expenses = {
  name: string;
  date: string;
  category: string;
  price: number;
};

const fetcher = async (userId: string) => {
  const responce = await fetch("http://192.168.1.2:4000/api/v0/table", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  });
  const newData = await responce.json();

  return newData;
};

const usefetchDataTable = (userId: string) => {
  if (!userId) {
    return { data: null };
  }

  const { data, error, isLoading } = useSWR(
    "tableData",
    () => fetcher(userId),
    {
      refreshInterval: 1000,
    }
  );

  return { data: data, error, isLoading };
};

export default usefetchDataTable;
