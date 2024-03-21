"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { accessToken } from "@/api/auth/authAPI";
import { set } from "date-fns";
import { connectWithDoc } from "@/api/doc-connect/doc-connect";


const PATIENT_URL = process.env.NEXT_PUBLIC_PATIENT_URL;

export default function ConnectWithDoc({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const docId = searchParams.get("docId") as string;
  const [smallWindow, setSmallWindow] = useState<Window | null>(null);
  const [accessTokenVal, setAccessTokenVal] = useState<string | null>(null);

  const handleDecline = () => {
    console.log("hello");
    router.replace("/dashboard/overview");
  };

  const handleAccept = async () => {
    const refreshToken = localStorage.getItem("REFRESHTOKEN");
    if (!refreshToken) {
      if (window.innerWidth <= 500 || window.innerHeight <= 650) {
        router.push("/connect-with-doc/popup-signin");
      } else {
        const width = 500;
        const height = 650;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        const features = `width=${width},height=${height},left=${left},top=${top}`;

        const newWindow = window.open(
          `${PATIENT_URL}/connect-with-doc/popup-signin`,
          "_blank",
          features
        );
        if (newWindow) {
          setSmallWindow(newWindow);
        }
      }
    }
    try {
      const res = await accessToken(refreshToken);
      console.log(res);

      if (res.status === 200) {
        setAccessTokenVal(res.data.accessToken);
        console.log(res.data.accessToken);
        const response = await connectWithDoc({
          token: res.data.accessToken,
          docId: docId,
        });

        console.log(response);

        if (response.status === 200) {
          toast({
            variant: "default",
            title: res.data.message,
            description: "Connected successfully",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          router.replace("/dashboard/overview");
        }

        if (response.status === 401) {
          return toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Unauthorized",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }

        if (response.status === 409) {
          toast({
            variant: "destructive",
            title: res.data.message,
            description: "Server error",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          router.replace("/dashboard/overview");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full grid place-content-center">
      <div className="p-16 bg-ugray-50 rounded-lg shadow-lg">
        <h1 className="text-xl text-center font-medium">
          Connect with doctor👋
        </h1>
        <h3 className="text-xs text-ugray-200 text-center my-5">
          Would you like to coninue with Unite?
        </h3>

        <div className="flex flex-row gap-4 items-center justify-center">
          <Button size={"lg"} onClick={handleAccept}>
            {" "}
            Accept Invitation
          </Button>
          <Button size={"lg"} variant={"outline"} onClick={handleDecline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
