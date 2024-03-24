"use client";

import { Button } from "@/components/common/Button";
import { RootState } from "@/store";
import { setIsModalOpen } from "@/store/reducers/report-reducer";
import { useDispatch, useSelector } from "react-redux";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Heading() {
  

  return (
    <div className="flex flex-row justify-between">
      <h1 className="font-semibold text-xl">Reports</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Report</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload a file</DialogTitle>
            <DialogDescription>
              Upload your medical report here
            </DialogDescription>
          </DialogHeader>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
