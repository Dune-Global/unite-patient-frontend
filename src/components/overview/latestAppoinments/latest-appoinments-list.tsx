"use client";

import { use, useEffect, useState } from "react";
import {
  getDoctorDetailsOfPatients,
  getLatestAppoinments,
} from "@/api/doctor-details/doctorDetailsAPI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import LatestAppoinmentCard from "./latest-appoinments-card";
import { DoctorCardSkeleton } from "../doctors/doctor-card-skeleton";
import {
  setAllAppointments,
  setAppointmentList,
  setTodayAppointments,
} from "@/store/reducers/doctor-reducer";
import { ChevronLeftIcon, ChevronRightIcon, Loader2 } from "lucide-react";
import Calender from "./calender";
import { getTodayAppoinments } from "@/api/patient-details/patientDetailsAPI";
import { CalendarCheck } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { set } from "date-fns";

export default function AppoinmentList() {
  const dispatch = useDispatch();
  const appoinmentList = useSelector(
    (state: RootState) => state.doctorState.appointmentList
  );
  const selectedDate = useSelector(
    (state: RootState) => state.doctorState.selectedDate
  );
  const [loading, setLoading] = useState(true);
  const [toggleToday, setToggleToday] = useState(true);
  const [toggleLoading, setToggleLoading] = useState(false);

  useEffect(() => {
    getTodayAppoinments(toggleToday)
      .then((res) => {
        dispatch(setAppointmentList(res.data));
        setLoading(false);
        setToggleLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [toggleToday, setToggleToday, dispatch]);

  useEffect(() => {
    getTodayAppoinments(true)
      .then((res) => {
        dispatch(setTodayAppointments(res.data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getTodayAppoinments(false)
      .then((res) => {
        dispatch(setAllAppointments(res.data));
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
    <div className="bg-ugray-0 mt-6 rounded-lg p-4 flex flex-col">
      {appoinmentList.length > 0 && (
        <div className="flex justify-center items-center scroll-my-36">
          <Toggle
            onClick={() => {
              setToggleToday(!toggleToday);
              setToggleLoading(true);
            }}
            className="my-4"
          >
            <CalendarCheck className="mr-2 h-4 w-4" />
            {toggleToday ? "Today Appointments" : "All Appointments"}
          </Toggle>
        </div>
      )}
      <div className="flex flex-col gap-7">
        {appoinmentList.length > 0 ? (
          appoinmentList.map((appoinment: any) => (
            <LatestAppoinmentCard
              key={appoinment.sessionTime}
              firstName={appoinment.firstName}
              lastName={appoinment.lastName}
              appoinmentNo={appoinment.appointmentNumber}
              imageUrl={appoinment.imgUrl}
              time={appoinment.sessionTime}
            />
          ))
        ) : (
          <p className="text-center text-xl font-medium my-10">
            No appointments
          </p>
        )}
      </div>
      {toggleLoading && (
        <div className="mt-7">
          <DoctorCardSkeleton />
        </div>
      )}
    </div>
  );
}
