"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, ShieldCloseIcon, X } from "lucide-react";
import Link from "next/link";

export default function LatestAppoinmentCard({
  firstName,
  lastName,
  appoinmentNo,
  imageUrl,
  time,
}: {
  firstName: string;
  lastName: string;
  appoinmentNo?: string;
  imageUrl: string;
  time?: string;
}) {
  const handleCancel = () => {
    alert("Cancel");
  };

  const handleDone = () => {
    alert("Done");
  };

  const firstLetter = firstName.charAt(0);
  const secondLetter = lastName.charAt(0);

  const formatedDateAndTime = time
    ? new Date(time).toLocaleDateString("en-US")
    : "";

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-3 items-center w-1/2">
        <Avatar>
          <AvatarImage src={imageUrl} />
        </Avatar>
        <div>
          <h3 className="text-base font-medium line-clamp-1">
            {firstName} {lastName}
          </h3>
          <p className="text-base text-ugray-400">
            Appoinment No: {appoinmentNo}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        {time === "done" ? (
          <span className="text-xs text-uindigo-600 bg-uindigo-200 px-4 py-2 rounded-md ">
            Done
          </span>
        ) : time === "cancelled" ? (
          <span className="text-xs text-ured-600 bg-[#FDE9E9] px-4 py-2 rounded-md">
            Cancelled
          </span>
        ) : (
          <div className="flex text-xs text-ugreen-600">{formatedDateAndTime}</div>
        )}
      </div>
    </div>
  );
}
