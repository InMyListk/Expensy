"use client";

import { Bottombar } from "@/components/bottombar";
import { Sidebar } from "@/components/sidebar";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  const router = useRouter();

  const { userId } = useAuth();

  if (!userId) {
    return router.push("/");
  }

  return (
    <div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <Bottombar />
      </div>

      <main>{children}</main>
    </div>
  );
};

export default layout;
