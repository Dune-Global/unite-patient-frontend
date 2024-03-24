import { Skeleton } from "@/components/ui/skeleton";

export function DoctorCardSkeleton() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-3 items-center w-1/2">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div>
          <Skeleton className="h-3 w-[150px]" />
          <Skeleton className="h-2 w-[100px] mt-2" />
        </div>
      </div>
    </div>
  );
}
