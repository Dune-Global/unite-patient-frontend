"use client";

import React, { useState } from "react";

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
import { uploadReport } from "@/api/reports/reportsAPI";
import { toast } from "@/components/ui/use-toast";

export default function Heading() {
  const [reportName, setReportName] = useState("");
  const [date, setDate] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if picture is not null
    if (picture) {
      // Submit the form
      uploadReport(reportName, date, picture)
        .then((response) => {
          setReportName("");
          setDate("");
          setPicture(null);

          toast({
            variant: "default",
            title: "Upload successful",
            description: "Your report has been uploaded successfully",
          });

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("No picture selected");
    }
  };

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

          <form
            className="grid w-full max-w-sm items-center gap-2"
            onSubmit={handleSubmit}
          >
            <div>
              <Label htmlFor="reportName">Report Name</Label>
              <Input
                id="reportName"
                type="text"
                placeholder="eg: Full blood count"
                value={reportName}
                required
                onChange={(e) => setReportName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="date">Test Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Label htmlFor="picture">Picture</Label>
            <div className="flex items-center gap-2">
              <Input
                className="cursor-pointer"
                id="picture"
                type="file"
                required
                accept=".png, .jpg, .jpeg"
                onChange={(e) =>
                  e.target.files && setPicture(e.target.files[0])
                }
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">Upload</Button>
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </div>
          </form>

          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
