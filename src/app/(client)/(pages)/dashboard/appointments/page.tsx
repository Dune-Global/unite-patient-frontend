"use client";

import { AppointmentList } from "@/types/appointments";
import React, { useEffect, useState } from "react";
import { DataTable } from "./(table)/data-table";
import { columns } from "./(table)/columns";
import { getUpcomingAppointments } from "@/api/appoinment/appoinmentAPI";
import { convertAppointments } from "@/helpers/appointments/convertToAppointmentList";

export default function AppointmentsPage() {
  const [data, setData] = useState<AppointmentList[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await getUpcomingAppointments();
        console.log("data from table:", res.data)
        const values: AppointmentList[] = convertAppointments(res.data);

        setData(values);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="text-3xl font-medium">
        <h1>All Appointments</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
