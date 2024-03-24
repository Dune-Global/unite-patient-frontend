import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Heading() {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="font-semibold text-xl">Latest Appoinments</h1>
      <Link href="/appoinments" className="flex flex-row font-semibold items-center">
        View all{" "}
        <span className="ml-3">
          <ChevronRight size={20} />
        </span>
      </Link>
    </div>
  );
}