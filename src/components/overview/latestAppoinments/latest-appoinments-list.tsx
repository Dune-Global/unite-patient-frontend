"use client";

import { useEffect, useState } from "react";
import { getDoctorDetailsOfPatients } from "@/api/doctor-details/doctorDetailsAPI";
import { useSelector, useDispatch } from "react-redux";
import { setDoctorList } from "@/store/reducers/doctor-reducer";
import { RootState } from "@/store";
import { DoctorCardSkeleton } from "./doctor-card-skeleton";
import LatestAppoinmentCard from "./latest-appoinments-card";

export default function DoctorsList() {
  const dispatch = useDispatch();
  const doctorList = useSelector(
    (state: RootState) => state.doctorState.doctorList
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctorDetailsOfPatients()
      .then((res) => {
        console.log(res.data);
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
        {doctorList.map((doctor: any) => (
          <LatestAppoinmentCard
            key={doctor.sessionId}
            firstName={doctor.doctor.firstName}
            lastName={doctor.doctor.lastName}
            designation={doctor.doctor.designation}
            imageUrl={doctor.doctor.imgUrl}
            status={doctor.status}
          />
        ))}
      </div>
    </div>
  );
}
