"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
  doctor: z.string().nonempty({ message: "Date is required" }),
  date: z.string().nonempty({ message: "Time is required" }),
  appointmentNumber: z.string().nonempty({ message: "Appointments is required" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function BookAppointmentCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doctor: "",
      date: "",
      appointmentNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Availability added successfully!",
      description: (
        <pre className="bg-ugray-900 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className=" text-ugray-0">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 px-2 mb-2 "
        >
          <div className="space-y-5 snap-y flex flex-col">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">Doctor</div>
                <FormField
                  control={form.control}
                  name="doctor"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Dr. John Doe</SelectItem>
                            <SelectItem value="2">Dr. Jane Doe</SelectItem>
                            <SelectItem value="3">Dr. John Smith</SelectItem>
                            <SelectItem value="4">Dr. Jane Smith</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">Date</div>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="April06">06 / 04 / 2024</SelectItem>
                            <SelectItem value="April07">07 / 04 / 2024</SelectItem>
                            <SelectItem value="April08">08 / 04 / 2024</SelectItem>
                            <SelectItem value="April09">10 / 04 / 2024</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">
                  Appointment
                </div>
                <FormField
                  control={form.control}
                  name="appointmentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an appointment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="4">Appointment No : 04 | Time : 09:10 AM | Lanka Hospital</SelectItem>
                            <SelectItem value="5">Appointment No : 05 | Time : 09:20 AM | Durdans Hospital</SelectItem>
                            <SelectItem value="6">Appointment No : 06 | Time : 09:30 AM | Asiri Medical Hospital</SelectItem>
                            <SelectItem value="7">Appointment No : 07 | Time : 09:40 AM | Nawaloka Hospital</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <Button type="submit" size="lg" className="text-ugray-0 bg-ublue-200">
                Set Availability
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
