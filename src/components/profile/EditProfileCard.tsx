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

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ProfileInfo } from "@/data/mock/profile-info";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  getUserDetails,
  updatePatient,
  verifyEmail,
} from "@/api/profile/profileAPI";
import { getUser } from "@/utils/getUser";
import { IAccessToken } from "@/types/jwt";
import { Button } from "../ui/button";
import { patientProfileObject } from "@/types/profile";
import { convertToObject } from "@/helpers/settings/convertEditProfileObject";

let user: IAccessToken | undefined;
const tempUser = getUser();
if (tempUser !== undefined && tempUser !== null) {
  user = tempUser;
}

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().nonempty({ message: "Email is required" }),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.date(),
  gender: z.string().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  bloodGroup: z.string().optional(),
  hereditaryDiseases: z.string().optional(),
  allergies: z.string().optional(),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function EditProfileCard() {
  type PatientType = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    imgUrl: string;
    isEmailVerified: boolean;
    mobile?: number;
    height?: number;
    weight?: number;
    bloodGroup?: string;
    allergies?: string;
    hereditaryDiseases?: string;
  };

  const [patient, setPatient] = useState<PatientType | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        console.log(user);
        const res: any = await getUserDetails(user?.id);
        if (res.status === 200) {
          console.log("hoooo", res.data)
          setPatient(res.data);
        } else if (res.data) {
          console.log(res.data.message);
        } else {
          console.log("No message available");
        }
      }
    };
    checkUser();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: patient?.firstName,
      lastName: patient?.lastName,
      email: patient?.email,
      phoneNumber: "",
      dateOfBirth: new Date() || null,
      gender: "",
      height: 0,
      weight: 0,
      bloodGroup: "",
      hereditaryDiseases: "",
      allergies: "",
    },
  });


  const handleVerifyEmail = async () => {
    try {
      const res: any = await verifyEmail();
      console.log(res);

      if (res.status === 200) {
        toast({
          title: "Verification Email Sent",
          description: "Check your email for the verification link",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Email verify failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const obj: patientProfileObject = convertToObject(values);

    try {
      const res = await updatePatient(obj);
      console.log("hi", res.status);

      if (res.status === 200) {
        toast({
          title: "Profile updated successfully!",
          description: "Your profile has been updated.",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: res.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      toast({
        title: "Profile update failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-3 px-2 mb-2 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {ProfileInfo.map((profile) => (
            <div className="space-y-5 snap-y flex flex-col" key={profile.id}>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">First Name</div>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter first name"
                            defaultValue={patient?.firstName}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Last Name</div>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter last name"
                            defaultValue={patient?.lastName}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Email</div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            placeholder="Enter email address"
                            defaultValue={patient?.email}
                            {...field}
                          />
                        </FormControl>

                        {patient?.isEmailVerified ? null : (
                          <Button
                            size="sm"
                            className="absolute top-0 right-2 text-ugray-0 bg-ublue-200"
                            onClick={handleVerifyEmail}
                          >
                            Verify
                          </Button>
                        )}

                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Contact Number
                  </div>
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your contact number"
                            defaultValue={patient?.mobile}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Date of Birth
                  </div>
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full border-ugray-100 pl-3 h-12 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Gender</div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={patient?.gender} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Height (in meters)
                  </div>
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter SLMC number"
                            defaultValue={patient?.height}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Weight (kg)</div>
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter NIC number"
                            defaultValue={patient?.weight}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">Blood Group</div>
                  <FormField
                    control={form.control}
                    name="bloodGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter blood group"
                            defaultValue={patient?.bloodGroup}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="snap-end w-full">
                  <div className="text-sm pb-2 text-ugray-400">
                    Hereditary Diseases
                  </div>
                  <FormField
                    control={form.control}
                    name="hereditaryDiseases"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter hereditary diseases"
                            defaultValue={patient?.hereditaryDiseases}
                            {...field}
                          />
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
                  <div className="text-sm pb-2 text-ugray-400">Allergies</div>
                  <FormField
                    control={form.control}
                    name="allergies"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={profile.allergies} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
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
              <div className="flex gap-4">
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="text-ugray-0 bg-ublue-200"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </form>
      </Form>
    </div>
  );
}
