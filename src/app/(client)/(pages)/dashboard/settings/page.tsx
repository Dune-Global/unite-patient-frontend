"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ChangePasswordCard from "@/components/profile/ChangePasswordCard";
import EditProfileCard from "@/components/profile/EditProfileCard";

export default function Settings() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-2xl font-medium">Profile Settings</div>
      </div>
      <div className="my-8 flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <Tabs defaultValue="edit-profile" className="w-full">
            <TabsList className="bg-ugray-0 py-6 mb-3">
              <div className="flex gap-6 px-6">
                <div>
                  <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                </div>
                <div>
                  <TabsTrigger value="change-password">
                    Change Password
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
            <TabsContent
              value="edit-profile"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              <EditProfileCard />
            </TabsContent>
            <TabsContent
              value="change-password"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              <ChangePasswordCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

