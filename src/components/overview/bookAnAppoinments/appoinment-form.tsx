"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/Button";
import { Button as NewButton } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store";
import { use, useEffect, useState } from "react";
import {
  getAppoinmentTime,
  getDoctorLocation,
  scheduleAppoinment,
} from "@/api/appoinment/appoinmentAPI";

const formSchema = z.object({
  doctors: z.string({
    required_error: "You need to select a doctor first",
  }),
  locations: z.string({
    required_error: "You need to select a location first",
  }),
  appoinments: z.string({
    required_error: "You need to select an appoinment first",
  }),
});

const formBaseStyles = {
  errorMessages: "text-ured-400 font-medium text-sm",
};

export default function AppoinmentForm() {
  const doctorList = useSelector(
    (state: RootState) => state.doctorState.doctorList
  );
  const [doctorId, setDoctorId] = useState<string>("");
  const [allLocations, setAllLocations] = useState<any>([]);
  const [sessionId, setSessionId] = useState<string>("");
  const [appoinmentList, setAppoinmentList] = useState<any>([]);
  const [appoinmentNumber, setAppoinmentNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [enableLocations, setEnableLocations] = useState<boolean>(false);
  const [enableAppointments, setEnableAppointments] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const res: any = await scheduleAppoinment(sessionId, appoinmentNumber);
      console.log(res.data);

      window.location.reload();

      return toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error: any) {
      return toast({
        title: "Something went wrong!",
        description: error,
      });
    }
  }

  // Get appointments location and time
  useEffect(() => {
    if (doctorId) {
      getDoctorLocation(doctorId)
        .then((res: any) => {
          console.log(res.data.availabilities);
          setAllLocations(res.data.availabilities);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [doctorId]);

  // Get appointments number
  useEffect(() => {
    if (doctorId && sessionId) {
      getAppoinmentTime(sessionId)
        .then((res: any) => {
          console.log(res.data);
          setAppoinmentList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [sessionId, doctorId]);

  // Function to handle doctor selection
  const handleDoctorSelection = (selectedDoctorId: string) => {
    setDoctorId(selectedDoctorId);
    setSessionId(""); // Reset session ID when doctor changes
    setEnableLocations(selectedDoctorId !== "");
    setEnableAppointments(false);
  };

  // Function to handle location selection
  const handleLocationSelection = (selectedSessionId: string) => {
    setSessionId(selectedSessionId);
    setEnableAppointments(selectedSessionId !== "");
  };

  // Function to handle appointment selection
  const handleAppointmentSelection = (selectedAppointmentId: string) => {
    // No action needed here, but you can add logic if necessary
  };


  return (
    <div className="bg-ugray-0 mt-6 rounded-lg p-4 flex flex-col gap-7">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full  px-2 mb-2 "
        >
          <div className="snap-end">
            <div className="text-sm text-ugray-400 mb-2">Doctor</div>
            <FormField
              control={form.control}
              name="doctors"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={(selectedDoctorId) => {
                        field.onChange(selectedDoctorId);
                        setDoctorId(selectedDoctorId);
                        console.log(selectedDoctorId);
                        handleDoctorSelection(selectedDoctorId);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorList.map((doctor: any) => {
                          return (
                            <SelectItem
                              key={doctor.doctor.id}
                              value={doctor.doctor.id}
                            >
                              Dr. {doctor.doctor.firstName}{" "}
                              {doctor.doctor.lastName}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className={`${formBaseStyles.errorMessages}`} />
                </FormItem>
              )}
            />
          </div>

          {/* ------------------BREAK------------------ */}

          <div className="snap-end">
            <div className="text-sm text-ugray-400 mb-2">Locations</div>
            <FormField
              control={form.control}
              name="locations"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                    disabled={!enableLocations}
                      onValueChange={(selectedSessionId) => {
                        field.onChange(selectedSessionId);
                        setSessionId(selectedSessionId);
                        handleLocationSelection(selectedSessionId);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {allLocations.map((location: any) => {
                          return (
                            <SelectItem key={location._id} value={location._id}>
                              {location.location} |{" "}
                              {new Date(location.date).toLocaleDateString(
                                "en-US"
                              )}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className={`${formBaseStyles.errorMessages}`} />
                </FormItem>
              )}
            />
          </div>

          {/* ------------------BREAK------------------ */}

          <div className="snap-end">
            <div className="text-sm text-ugray-400 mb-2">Apponments</div>
            <FormField
              control={form.control}
              name="appoinments"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                    disabled={!enableAppointments}
                      onValueChange={(selectedAppoinmentId) => {
                        field.onChange(selectedAppoinmentId);
                        console.log(selectedAppoinmentId);
                        setAppoinmentNumber(selectedAppoinmentId);
                        handleAppointmentSelection(selectedAppoinmentId);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an Appoinment" />
                      </SelectTrigger>
                      <SelectContent>
                        {appoinmentList.map((appoinment: any) => {
                          return (
                            <SelectItem
                              key={appoinment.appointmentNumber}
                              value={appoinment.appointmentNumber.toString()}
                            >
                              {appoinment.appointmentNumber} |{" "}
                              {new Date(
                                appoinment.allocatedTime
                              ).toLocaleTimeString("en-US")}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className={`${formBaseStyles.errorMessages}`} />
                </FormItem>
              )}
            />
          </div>

          {/* ------------------BREAK------------------ */}

          <div className="flex">
            <Button
            disabled={!enableAppointments}
              loading={isLoading}
              size={"lg"}
              //   loading={isLoading}
              className="bg-ublue-100 text-ugray-0"
            >
              Book an Appoinment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
