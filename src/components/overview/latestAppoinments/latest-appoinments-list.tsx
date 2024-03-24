"use client";

import { useEffect, useState } from "react";
import {
  getDoctorDetailsOfPatients,
  getLatestAppoinments,
} from "@/api/doctor-details/doctorDetailsAPI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import LatestAppoinmentCard from "./latest-appoinments-card";
import { DoctorCardSkeleton } from "../doctors/doctor-card-skeleton";
import { setAppointmentList } from "@/store/reducers/doctor-reducer";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Calender from "./calender";

export default function AppoinmentList() {
  const dispatch = useDispatch();
  const appoinmentList = useSelector(
    (state: RootState) => state.doctorState.appointmentList
  );
  const selectedDate = useSelector(
    (state: RootState) => state.doctorState.selectedDate
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(selectedDate?.toLocaleDateString("en-US"));
  }, [selectedDate]);

  useEffect(() => {
    getLatestAppoinments()
      .then((res) => {
        console.log(res.data);
        dispatch(setAppointmentList(res.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-US");
      const filteredAppointments = appoinmentList.filter((appointment) => {
        const appointmentDate = new Date(appointment.date).toLocaleDateString(
          "en-US"
        );
        return appointmentDate === formattedDate;
      });
      console.log(filteredAppointments);
    }
  }, [selectedDate, appoinmentList]);

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
        {/* {appoinmentList.map((doctor: any) => (
          <LatestAppoinmentCard
            key={doctor.sessionId}
            firstName={doctor.doctor.firstName}
            lastName={doctor.doctor.lastName}
            designation={doctor.doctor.designation}
            imageUrl={doctor.doctor.imgUrl}
            status={doctor.status}
          />
        ))} */}
      </div>
      <Calender />
    </div>
  );
}
