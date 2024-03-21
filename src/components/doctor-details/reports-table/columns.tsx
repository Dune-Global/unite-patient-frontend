"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { IMedicalReports } from "@/types/medical-reports";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const reportColumns: ColumnDef<IMedicalReports>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "reportName",
    header: "Doctor Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-2 items-center">
          {/* <div>
            <img
              src={`https://ui-avatars.com/api/?name=${row.original.reportName}`}
              alt="patient"
              className="w-8 h-8 rounded-full"
            />
          </div> */}
          <div>{row.original.reportName}</div>
        </div>
      );
    },
  },

  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Specialty</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
];
