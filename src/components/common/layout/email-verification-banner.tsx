"use client";
import { RootState } from "@/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function EmailVerificationBanner() {
  const isEmailVerified = useSelector(
    (state: RootState) => state.auth.isEmailVerified
  );

  return (
    <div
      className={`bg-[#FDE9E9] rounded-md text-ured-600 font-xs p-2 text-center ${
        isEmailVerified ? "hidden text-xs" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <p className="text-xs">
          {isEmailVerified
            ? ""
            : "Please verify your email to access all features"}
        </p>
        <Link
          href="/resend-verification-email"
          className="text-xs text-ured-400 underline"
        >
          Resend verification email
        </Link>
      </div>
    </div>
  );
}
