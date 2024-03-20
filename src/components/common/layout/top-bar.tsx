"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store";
import { Bell, Info, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function TopBar() {
  const pageName = useSelector((state: RootState) => state.pageState.pageName);
  

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="flex flex-row gap-4 items-center text-sm text-ugray-400">
        <Search size={15} />
        <h4>Search Appointments, Patients or etc.</h4>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row gap-6">
          <Info size={20} />
          <Bell size={20} />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-sm font-medium">Lithara Perera</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm opacity-70">
                Patient
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
