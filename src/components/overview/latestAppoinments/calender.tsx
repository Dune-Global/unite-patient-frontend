"use client";

import { RootState } from "@/store";
import { setSelectedDate } from "@/store/reducers/doctor-reducer";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Calender() {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const selectedDate = useSelector(
    (state: RootState) => state.doctorState.selectedDate
  );
  const handleClickPrev = (): void => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth(),
          prevDate.getDate() - 7
        )
    );
  };

  const handleClickNext = (): void => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth(),
          prevDate.getDate() + 7
        )
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleDateClick = (date: Date): void => {
    dispatch(setSelectedDate(date));
    // console.log(date.toLocaleDateString("en-US"));
  };

  const renderDateButton = (date: Date, index: number): JSX.Element => {
    return (
      <button
        key={index}
        onClick={() => handleDateClick(date)}
        className={`flex flex-col items-center justify-items-center gap-2 rounded-md p-2${
          isToday(date)
            ? "rounded-md p-2 bg-[#FFEACC]"
            : selectedDate?.getTime() === date.getTime()
            ? "rounded-md p-2 bg-[#CEE6FF]"
            : ""
        }`}
      >
        <p>{date.toLocaleDateString("en-US", { weekday: "narrow" })}</p>
        <p>{date.getDate()}</p>
      </button>
    );
  };

  const renderWeek = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      days.push(renderDateButton(date, i));
    }

    return days;
  };
  return (
    <div className="mt-8">
      <div className="flex flex-row gap-4 items-center">
        <h2 className="text-base font-medium">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h2>
        <div className="flex flex-row gap-1">
          <button
            onClick={handleClickPrev}
            className="bg-ublue-200 hover:bg-ublue-100 text-ugray-0 rounded-md"
          >
            <ChevronLeftIcon size={16} />
          </button>
          <button
            onClick={handleClickNext}
            className="bg-ublue-200 hover:bg-ublue-100 text-ugray-0 rounded-md"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-1 mt-4 justify-between">
        {renderWeek()}
      </div>
    </div>
  );
}
