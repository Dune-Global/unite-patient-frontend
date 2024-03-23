import DoctorsList from "@/components/overview/doctors/doctors-list";
import Heading from "@/components/overview/doctors/heading";

export default function Doctors() {
  return (
    <div className="p-2">
      <Heading />
      <DoctorsList />
    </div>
  );
}
