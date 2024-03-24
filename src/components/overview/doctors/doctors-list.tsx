"use client";

import { useEffect, useState } from "react";
import DoctorCard from "./doctor-card";
import { getDoctorDetailsOfPatients } from "@/api/doctor-details/doctorDetailsAPI";
import { useSelector, useDispatch } from "react-redux";
import { setDoctorList } from "@/store/reducers/doctor-reducer";
import { RootState } from "@/store";
import { DoctorCardSkeleton } from "./doctor-card-skeleton";

export default function DoctorsList() {
  const dispatch = useDispatch();
  const doctorList = useSelector(
    (state: RootState) => state.doctorState.doctorList
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctorDetailsOfPatients()
      .then((res) => {
        dispatch(setDoctorList(res.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (
      <div className="bg-ugray-0 mt-6 rounded-lg p-4">
        <div className="flex flex-col gap-7">
          <DoctorCardSkeleton />
          <DoctorCardSkeleton />
          <DoctorCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ugray-0 mt-6 rounded-lg p-4">
      <div className="flex flex-col gap-7">
        {doctorList.length > 0 ? (
           doctorList.map((doctor: any) => (
            <DoctorCard
              key={doctor.sessionId}
              firstName={doctor.doctor.firstName}
              lastName={doctor.doctor.lastName}
              designation={doctor.doctor.designation}
              imageUrl={doctor.doctor.imgUrl}
              status={doctor.status}
            />
          )) 
        ): (
            <div className="text-center text-ugray-400">
                No doctors available
            </div>
        )}
      </div>
    </div>
  );
}
