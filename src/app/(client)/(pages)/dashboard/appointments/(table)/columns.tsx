"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown } from "lucide-react"
import { AppointmentList } from "@/types/appointments"

export const columns: ColumnDef<AppointmentList>[] = [
    {
        accessorKey: "doctorName",
        header: "Doctor Name",
        cell: ({ row }) => {
            return (
                <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-2 items-center">
                    <div>
                        <img src={`${row.original.imgUrl}`} alt="patient" className="w-8 h-8 rounded-full" />
                    </div>
                    <div>
                        {row.original.doctorName}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "speciality",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Speciality
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "gender",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Gender
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Email
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Date
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "time",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Time
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
]