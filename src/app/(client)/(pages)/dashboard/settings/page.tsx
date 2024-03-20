"use client";

import { ProfileInfo } from "@/data/mock/profile-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react"
import PatientCard from "@/components/profile/PatientCard";

export default function Settings() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-2xl font-medium">Profile Settings</div>
      </div>
      <div className="my-8 flex flex-col lg:flex-row gap-4">
        <div>
          {ProfileInfo.map((profile) => (
            <div key={profile.id}>
              <PatientCard
                image={profile.image}
                name={profile.fName + " " + profile.lName}
                gender={profile.gender}
                age={profile.age}
                email={profile.email}
                contactNumber={profile.contactNumber}
                weight={profile.weight}
                height={profile.height}
                bloodGroup={profile.bloodGroup}
                bloodPressure={profile.bloodPressure}
                allergies={profile.allergies}
                hereditaryDiseases={profile.hereditaryDiseases}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <Tabs defaultValue="book-appointment" className="w-full">
            <TabsList className="bg-ugray-0 py-6 mb-3">
              <div className="flex gap-6 px-6">
                <div>
                  <TabsTrigger value="book-appointment">Book an Appointment</TabsTrigger>
                </div>
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
            <TabsContent value="book-appointment" className="w-full">
              <div className="bg-ugray-0 p-4 rounded-lg shadow-sm">
                Book an appointment
              </div>
            </TabsContent>
            <TabsContent
              value="edit-profile"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              {/* <EditProfileCard /> */} Edit Profile
            </TabsContent>
            <TabsContent
              value="change-password"
              className="bg-ugray-0 p-4 rounded-lg shadow-sm"
            >
              {/* <ChangePasswordCard /> */} Change Password
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}