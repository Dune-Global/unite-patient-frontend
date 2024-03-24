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
import { useDispatch } from "react-redux";

import { usePathname } from "next/navigation";
import Link from "next/link";

import React, { useState } from "react";
import { sideMenuItems } from "@/data/side-menu/side-menu";
import Image from "next/image";

import Container from "../Container";
type Props = {};

const SideMenu = (props: Props) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between md:hidden mt-4">
          <div>
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
              quality={10}
              className="pl-3"
            />
          </div>
          <div className="flex flex-row gap-3 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator />
                {sideMenuItems.map((item) => (
                  <Link href={item.path} key={item.id}>
                    <DropdownMenuItem>{item.description}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
      <div className="hidden h-screen lg:flex flex-col border-2 border-ugray-50 rounded-lg md:w-full sm:max-w-full pt-4 p-2">
        <div>
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={100}
            height={100}
            quality={10}
            className="pl-3"
          />
        </div>
        <div className="flex flex-col mt-7">
          {sideMenuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="py-[1px]"
            >
              <div
                className={`p-4 flex items-center gap-3 rounded-xl hover:text-ugray-400 hover:bg-ugray-100 ${
                  pathName === item.path &&
                  "bg-ugray-900 text-ugray-50 border rounded-xl hover:text-ugray-0 hover:bg-ugray-900"
                }`}
              >
                <item.icon size={22} strokeWidth={2} className="  " />
                <h2 className="  ">{item.description}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
