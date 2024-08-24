import React from "react";
import { SidebarList } from "./sidebar-list";

import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="md:w-[70px] border-l flex flex-col items-center min-h-full top-0 right-0 fixed z-50 bg-white">
      <div className="mt-5 cursor-pointer">
        <Link href="/">
          <Image src="/expensy-icon.svg" width={45} height={45} alt="expensy" />
        </Link>
      </div>
      <div className="pt-7 flex-1">
        <SidebarList className="flex-col" />
      </div>
      <div className="p-4 flex flex-col items-center gap-y-5">
        <div className="cursor-pointer">
          <Settings
            className="text-gray-500 hover:rotate-180 duration-300"
            strokeWidth={1.5}
            size={30}
          />
        </div>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSwitchSessionUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};
