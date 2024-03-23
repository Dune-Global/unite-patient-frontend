"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, ShieldCloseIcon, X } from "lucide-react";
import Link from "next/link";

export default function DoctorCard({
  firstName,
  lastName,
  designation,
  imageUrl,
  status,
}: {
  firstName: string;
  lastName: string;
  designation?: string;
  imageUrl: string;
  status?: string;
}) {
  const handleCancel = () => {
    alert("Cancel");
  };

  const handleDone = () => {
    alert("Done");
  };

  const firstLetter = firstName.charAt(0);
  const secondLetter = lastName.charAt(0);

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-3 items-center w-1/2">
        <Avatar>
          <AvatarImage src={imageUrl} />
          
        </Avatar>
        <div>
          <h3 className="text-base font-medium line-clamp-1">{firstName}</h3>
          <p className="text-base text-ugray-400">
            {designation}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        {status === "done" ? (
          <span className="text-xs text-uindigo-600 bg-uindigo-200 px-4 py-2 rounded-md ">
            Done
          </span>
        ) : status === "cancelled" ? (
          <span className="text-xs text-ured-600 bg-[#FDE9E9] px-4 py-2 rounded-md">
            Cancelled
          </span>
        ) : (
          <div className="flex text-xs text-ugreen-600">
            {status} 
          </div>
        )}
      </div>
    </div>
  );
}
