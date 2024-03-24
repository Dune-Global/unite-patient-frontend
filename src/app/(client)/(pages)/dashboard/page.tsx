"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LucideLoader2 } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/overview");
  }, []);

  return (
    <div className="h-[80vh] w-full grid place-content-center">
      <LucideLoader2 size={100} className="animate-spin"/>
    </div>
  );
}
