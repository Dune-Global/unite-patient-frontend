import SummaryCard from "@/components/overview/summary/summary-card";
import { Calendar, User, MessageSquareMoreIcon, Clock } from "lucide-react";

export default function Summary() {
  return (
    <div className="mt-6 flex flex-row flex-wrap justify-between">
      <SummaryCard
        cardColor="bg-uindigo-400"
        description="Today's Appointments"
        Icon={Calendar}
        value="0"
      />
      <SummaryCard
        cardColor="bg-upink-400"
        description="Total Doctors"
        Icon={User}
        value="05"
      />
      <SummaryCard
        cardColor="bg-uorange-600"
        description="Unread Messages"
        Icon={MessageSquareMoreIcon}
        value="03"
      />
      <SummaryCard
        cardColor="bg-umint-600"
        description="Total Appointments"
        Icon={Clock}
        value="16"
      />
    </div>
  );
}
