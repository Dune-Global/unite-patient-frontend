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
import React from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ProfileInfo } from "@/data/mock/profile-info";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { updatePatient, verifyEmail } from "@/api/profile/profileAPI";
import { getUser } from "@/utils/getUser";
import { IAccessToken } from "@/types/jwt";

let user: IAccessToken;
const tempUser = getUser();
if (tempUser !== undefined && tempUser !== null) {
  user = tempUser;
}

const formSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().nonempty({ message: "Email is required" }),
  phoneNumber: z.string().nonempty({ message: "Contact number is required" }),
  dateOfBirth: z.string().nonempty({ message: "Date of birth is required" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: "",
      dateOfBirth: "",
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

  const handleEditProfile = async (values: any) => {
    try {
      const res = await updatePatient(values);
      console.log(res);

      if (res.status === 200) {
        toast({
          title: "Patient Updated Successfully",
          description: "Your details updated successfully",
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
        title: "Patient update failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-3 px-2 mb-2 ">
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
                            defaultValue={profile.fName}
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
                            defaultValue={profile.lName}
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
                            defaultValue={profile.email}
                            {...field}
                          />
                        </FormControl>

                        {user.isEmailVerified ? null : (
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
                            defaultValue={profile.contactNumber}
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
                  <div className="text-base">Date of Birth</div>
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
                                  "w-full border-ugray-100 pl-3 text-left font-normal",
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
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={profile.gender} />
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
                            defaultValue={profile.height}
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
                            defaultValue={profile.weight}
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
                            placeholder="Enter current hospital"
                            defaultValue={profile.bloodGroup}
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
                    Current University
                  </div>
                  <FormField
                    control={form.control}
                    name="hereditaryDiseases"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter current university"
                            defaultValue={profile.hereditaryDiseases}
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
                    onClick={handleEditProfile}
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
