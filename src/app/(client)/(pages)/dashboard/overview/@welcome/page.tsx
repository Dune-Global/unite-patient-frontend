"use client";

import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const { firstName, lastName } = useSelector((state: RootState) => state.auth);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage =
      "It's a beautiful morning and have a nice day at your work";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Keep going with your schedule, have a nice day";
  } else {
    greetingMessage = "It's time to relax, have a good night";
  }

  return (
    <div className="mb-6 pl-2 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium">
          Welcome {" "}
          <span>
            {firstName} {lastName}
          </span>
          ,
        </h1>
        <h3 className="mt-1 text-ugray-400 text-sm font-medium">
          {greetingMessage}
        </h3>
      </div>
    </div>
  );
}
