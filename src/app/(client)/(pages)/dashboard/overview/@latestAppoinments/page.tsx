import Heading from "@/components/overview/latestAppoinments/heading";
import AppoinmentList from "@/components/overview/latestAppoinments/latest-appoinments-list";

export default function LatestAppoinments() {
  return (
    <div className="p-2">
      <Heading />
      <AppoinmentList />
    </div>
  );
}
