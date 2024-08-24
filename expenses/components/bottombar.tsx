import React from "react";
import { SidebarList } from "./sidebar-list";
import { Loader, Settings } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export const Bottombar = () => {
  return (
    <div className="w-full border-l flex items-center border-t justify-between px-5 h-[70px] bottom-0 right-0 fixed z-50 bg-white">
      <div className="cursor-pointer ">
        <Settings
          className="text-gray-500 hover:rotate-180 duration-300"
          strokeWidth={1.5}
          size={30}
        />
      </div>

      <SidebarList className="justify-center gap-x-5" />

      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSwitchSessionUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
