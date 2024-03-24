"use client";

import SummaryCard from "@/components/overview/summary/summary-card";
import { RootState } from "@/store";
import { Calendar, User, MessageSquareMoreIcon, Clock } from "lucide-react";
import { useSelector } from "react-redux";

export default function Summary() {
  const { doctorList, allAppointments, todayAppointments } = useSelector(
    (state: RootState) => state.doctorState
  );

  const doctorsCount = doctorList.length;
  const allAppointmentsCount = allAppointments.length;
  const todayAppointmentsCount = todayAppointments.length;

  return (
    <div className="mt-6 flex flex-row flex-wrap justify-between">
      <SummaryCard
        cardColor="bg-uindigo-400"
        description="Today's Appointments"
        Icon={Calendar}
        value={todayAppointmentsCount.toString()}
      />
      <SummaryCard
        cardColor="bg-upink-400"
        description="Total Doctors"
        Icon={User}
        value={doctorsCount.toString()}
      />
      <SummaryCard
        cardColor="bg-uorange-600"
        description="Unread Messages"
        Icon={MessageSquareMoreIcon}
        value="Coming soon"
      />
      <SummaryCard
        cardColor="bg-umint-600"
        description="Total Appointments"
        Icon={Clock}
        value={allAppointmentsCount.toString()}
      />
    </div>
  );
}
