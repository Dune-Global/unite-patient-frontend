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

import { Button } from "@/components/common/Button";
import { Button as ShadButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { UniteModal } from "@/components/common/UniteModal";
import { MedicalInformationDataTable } from "../medical-history-table/data-table";
import { IMedicalInformation } from "@/types/medical-information";
import { getAllMedicalInformation } from "@/data/mock/medical-information";
import { connectedDoctorsColumns } from "../medical-history-table/columns";
import { getDoctorListAndAccessInfo } from "@/api/reports/reportsAPI";
import ConnectedDoctorsTable from "../medical-history-table/ConncetedDoctorsTable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function MedicalReportsDataTable<TData, TValue>({
  columns,
  data,
}: Readonly<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [connectedDoctors, setConnectedDoctors] = useState<
    IMedicalInformation[]
  >([]);

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

  const handleRowClick = (rowData: any) => {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const getDoctorListAndAccessInfoActionHandler = async (
      reportId: string
    ) => {
      const res = await getDoctorListAndAccessInfo(reportId);
      console.log("\n\n\ndoctor list and access info res", res.data);
      if (res.data) {
        setConnectedDoctors(res.data.doctorsAllowed);
      } else {
        console.error(
          "Unexpected response from getDoctorListAndAccessInfo:",
          res
        );
      }
    };
    getDoctorListAndAccessInfoActionHandler(selectedRow?._id);
  }, [selectedRow]);

  return (
    <>
      <div className="flex items-center py-4 gap-3">
        <Input
          placeholder="Filter report by name..."
          value={
            (table.getColumn("reportType")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("reportType")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-ugray-200"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-ugray-200">
            <Button variant="outline" className="ml-auto text-ugray-400">
              Columns
            </Button>
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
                  onClick={() => handleRowClick(row.original)}
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

      <UniteModal
        title={selectedRow ? selectedRow.reportType : ""}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          <div className="grid gap-4">
            <div>
              <div className="text-ugray-400">
                Date: {selectedRow?.tookDate}
              </div>
            </div>
            <div>
              {/* <MedicalInformationDataTable
                columns={connectedDoctorsColumns}
                data={connectedDoctors}
                reportUrl={selectedRow?.reportUrl}
                reportId={selectedRow?._id}
              /> */}
              <ConnectedDoctorsTable
                data={connectedDoctors}
                reportUrl={selectedRow?.reportUrl}
                reportId={selectedRow?._id}
              />
            </div>
          </div>
        }
        // footer={
        //   <div className="flex justify-start gap-6 w-full">
        //     <Button variant="default" size="lg">
        //       Save changes
        //     </Button>

        //     <Button
        //       variant="outline"
        //       size="lg"
        //       onClick={() => window.open(selectedRow?.reportUrl, "_blank")}
        //     >
        //       View report
        //     </Button>
        //   </div>
        // }
      />

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
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
