"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button as ShadButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IMedicalInformation } from "@/types/medical-information";
import { Button } from "@/components/common/Button";

interface DataTableProps<TData extends IMedicalInformation, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  reportUrl?: string;
  reportId?: string;
}

export function MedicalInformationDataTable<
  TData extends IMedicalInformation,
  TValue
>({
  columns,
  data,
  reportUrl,
  reportId,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [checkedRows, setCheckedRows] = useState<IMedicalInformation[]>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const handleLogClick = () => {
    const selectedDoctorIds = checkedRows.map((row) => row.doctorId);
    console.log("\n\n\nselected doctor IDs", selectedDoctorIds);
    console.log("\n\n\nselected report ID", reportId);
  };

  useEffect(() => {
    setCheckedRows(
      table.getFilteredSelectedRowModel().rows.map((row) => row.original)
    );
  }, [table.getFilteredSelectedRowModel().rows]);

  return (
    <>
      <div className="flex items-center py-4 gap-3">
        <Input
          placeholder="Filter doctor by name..."
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-ugray-200"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-ugray-200">
            <ShadButton variant="outline" className="ml-auto text-ugray-400">
              Columns
            </ShadButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md">
        <Table className="text-ugray-600">
          <TableHeader className="bg-ugray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-ugray-50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="py-5">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="bg-ugray-0 border-ugray-50 border-y-8"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between space-y-4 md:space-x-0 space-x-2 py-4 mt-5">
        <div className="space-x-2">
          <Button size="lg" onClick={handleLogClick}>
            Save changes
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(reportUrl, "_blank")}
          >
            View report
          </Button>
        </div>
        <div className=" space-x-2">
          <ShadButton
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </ShadButton>
          <ShadButton
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </ShadButton>
        </div>
      </div>
    </>
  );
}
