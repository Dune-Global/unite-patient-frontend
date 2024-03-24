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
import { Button } from "@/components/common/Button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { updatePassword } from "@/api/profile/profileAPI";

const formSchema = z.object({
  currentPassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  newPassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

export default function AvailabilityCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        const res = await updatePassword({
            oldPassword: values.currentPassword,
            newPassword: values.newPassword,
        });

        if (res.status === 200) {
            toast({
                title: "Password updated successfully!",
                description: "Your password has been updated.",
            });
        } else {
            toast({
                title: "Something went wrong!",
                description: res.data.message,
                variant: "destructive",
            });
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        toast({
            title: "Password must match!",
            description: "Please try again",
            variant: "destructive",
        });
    }
}

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleEyeClick2 = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleEyeClick3 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
                <div className="text-sm pb-2 text-ugray-400">
                  Current Password
                </div>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter current password"                          
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
                <div className="text-sm pb-2 text-ugray-400">New Password</div>
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter new password" {...field} />
                      </FormControl>
                      <button
                        className="absolute right-2 top-[0.65rem] text-xl"
                        type="button"
                        onClick={handleEyeClick2}
                      >
                        {showNewPassword ? (
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
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div className="snap-end w-full">
                <div className="text-sm pb-2 text-ugray-400">
                  Number of Appointments
                </div>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Re-enter new password" {...field} />
                      </FormControl>
                      <button
                        className="absolute right-2 top-[0.65rem] text-xl"
                        type="button"
                        onClick={handleEyeClick3}
                      >
                        {showConfirmPassword ? (
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
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <Button type="submit" size="lg">
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
