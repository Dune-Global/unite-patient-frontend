"use client";
import React, { useEffect, useState } from "react";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Image from "next/image";
import { toast } from "@/components/ui/use-toast";
import { registerAccount } from "@/api/auth/authAPI";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getGenderList } from "@/api/enums/enumsAPI";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  lastName: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),

  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),

  dateOfBirth: z.date({
    required_error: "A date of birth is required",
  }),
  gender: z.string({
    required_error: "Gender is required",
  }),
});

const formBaseStyles = {
  errorMessages: "text-ured-400 font-medium text-sm",
};

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [genderList, setGenderList] = useState([]);

  useEffect(() => {
    getGenderList().then((res) => {
      setGenderList(res.data);
    });
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await registerAccount(values);
      console.log(res);

      if (res.status === 200) {
        toast({
          title: "Sign up Successful",
          description: (
            <pre className="bg-ugray-900 mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className=" text-ugray-0">
                {JSON.stringify(values, null, 2)}
              </code>
            </pre>
          ),
        });
      } else if (res.status === 409) {
        toast({
          title: "Sign up failed",
          description: res.data.errors[0].messages[0],
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign up failed",
          description: "Please try again",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign up failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  }

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };
  const handleEyeClick2 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className=" ">
      <div className="flex justify-center ">
        <div className="flex flex-col gap-2 md:px-8  w-80  items-center justify-center sm:w-[500px] py-5   ">
          <div>
            <Image
              src={"/logo/logo.png"}
              alt=""
              width={130}
              height={100}
              quality={10}
              className="mb-2"
            ></Image>{" "}
          </div>

          <div className="flex flex-col gap-1  items-center text-center">
            <h2 className="font-semibold text-4xl mb-2">
              Let&apos;s get started
            </h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 w-full  px-2 mb-2 "
            >
              <div className="space-y-2 ">
                <div className="snap-end ">
                  <div className="text-base">First Name</div>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your First Name"
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
                <div className="snap-end">
                  <div className="text-base">Last Name</div>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Last Name"
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
                <div className="snap-end">
                  <div className="text-base">Email</div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your Email Address"
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

                <div>
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
                                  "w-full border-ugray-100 pl-3 text-left font-normal flex flex-row  ",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span className="flex">Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50 flex" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
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

                <div className="snap-end">
                  <div className="text-base">Gender</div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              {genderList.map((gender: any, index) => {
                                return (
                                  <SelectItem key={index} value={gender}>
                                    {gender}
                                  </SelectItem>
                                );
                              })}
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
                <div className="snap-end">
                  <div className="text-base">Password</div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your Password"
                              {...field}
                            />
                          </FormControl>
                          <button
                            className="absolute right-2 top-[0.65rem] text-xl"
                            type="button"
                            onClick={handleEyeClick}
                          >
                            {showPassword ? (
                              <EyeOff
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            ) : (
                              <Eye
                                size={25}
                                strokeWidth={1}
                                className="text-black"
                              />
                            )}
                          </button>
                        </div>
                        <FormMessage
                          className={`${formBaseStyles.errorMessages}`}
                        />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="py-2">
                <Button className="w-full bg-ublue-100 text-ugray-0">
                  Sign Up
                </Button>
                <div className="text-sm text-center pt-2">
                  <p className="text-black">
                    Already have an account?{" "}
                    <a href="/sign-in" className="text-ublue-100 underline">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
