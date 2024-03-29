import type { Metadata } from "next";
import SideMenu from "@/components/common/layout/side-menu";
import TopBar from "@/components/common/layout/top-bar";
import EmailVerificationBanner from "@/components/common/layout/email-verification-banner";

export const metadata: Metadata = {
  title: "Patient Dashboard",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-ugray-0">
      <div className="w-full flex-none md:w-64 shadow-xl">
        <SideMenu />
      </div>
      <div className="flex-grow md:overflow-y-auto  bg-ugray-50">
        <EmailVerificationBanner /> 
        <div className="p-4 md:p-5">
          <div className="hidden md:flex">
            <TopBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
