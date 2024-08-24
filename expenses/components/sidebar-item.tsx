import React from "react";
import { ChartColumn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  imageSrc: string;
  href: string;
};

export const SidebarItem = ({ label, imageSrc, href }: Props) => {
  const pathName = usePathname();

  const active = pathName === href;

  return (
    <Link href={href}>
      <div
        className={cn(
          "border p-2 rounded-md cursor-pointer",
          active && "border-blue-400 p-2.5 duration-200"
        )}
      >
        <Image src={imageSrc} alt={label} width={30} height={30} />
      </div>
    </Link>
  );
};
