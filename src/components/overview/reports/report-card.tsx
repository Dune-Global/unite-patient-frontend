import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Button } from "@/components/common/Button";
import Image from "next/image";

export default function ReportCard({
  reportName = "Report Name",
  date = "01/01/2021",
  reportUrl = "/",
}: {
  reportName?: string;
  date?: string;
  reportUrl?: string;
}) {
  const style = {
    tableHeading: "w-4/5 text-ugray-900/70 font-medium",
  };

  const formatedDate = date ? new Date(date).toLocaleDateString("en-US") : "";

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <div className="bg-ugray-0  rounded-lg p-4 flex flex-row justify-between">
          <div className={`${style.tableHeading}`}>
            <h1>{reportName}</h1>
          </div>
          <div className={`${style.tableHeading} !w-1/4 text-right`}>
            <h1>{formatedDate}</h1>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{reportName}</DialogTitle>
          <DialogDescription>{formatedDate}</DialogDescription>
        </DialogHeader>

        <Zoom>
          <Image
            src={reportUrl}
            alt="Report"
            width={500}
            height={500}
            priority={false}
            unoptimized={false}
          />
        </Zoom>

        <DialogClose asChild>
          <div className="max-w-5">
            <Button>Close</Button>
          </div>
        </DialogClose>

        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
