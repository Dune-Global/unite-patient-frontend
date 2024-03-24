"use client"

import { DoctorList } from "@/types/doctors";
import React, { useEffect, useState } from "react";
import { DataTable } from "./(table)/data-table";
import { columns } from "./(table)/columns";
import { getAllDoctors } from "@/api/doctor-list/doctorsListAPI";
import { convertDoctorsList } from "@/helpers/doctors/convertToDoctorList";

export default function DoctorPage() {
  const [data, setData] = useState<DoctorList[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await getAllDoctors();
        console.log("data from table:", res.data)
        const values: DoctorList[] = convertDoctorsList(res.data);

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
        <h1>All Doctors</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
