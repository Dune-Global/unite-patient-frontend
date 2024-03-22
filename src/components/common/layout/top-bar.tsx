"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store";
import { getUser } from "@/utils/getUser";
import { Bell, Info, Search } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { accessToken } from "@/api/auth/authAPI";
import {
  setDesignation,
  setDoctorId,
  setEmail,
  setFirstName,
  setImageUrl,
  setIsAuth,
  setIsEmailVerified,
  setLastName,
} from "@/store/reducers/auth-reducer";

export default function TopBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isEmailVerified,isAuth, designation, email, firstName, lastName, imageUrl } =
    useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const myRefreshToken = localStorage.getItem("REFRESHTOKEN") as string;
    const myAccessToken = sessionStorage.getItem("ACCESSTOKEN");

    if (!myRefreshToken) {
      router.push("/sign-in");
    }

    if (!myAccessToken) {
      accessToken(myRefreshToken).then((response) => {
        const { accessToken } = response.data;
        sessionStorage.setItem("ACCESSTOKEN", `Bearer ${accessToken}`);
      });
    }

    const user: any = getUser();
    if (!user) {
      return router.push("/sign-in");
    }
    console.log(user);
    dispatch(setIsAuth(true));
    dispatch(setDesignation(user.designation));
    dispatch(setFirstName(user.firstName));
    dispatch(setLastName(user.lastName));
    dispatch(setEmail(user.email));
    dispatch(setImageUrl(user.imgUrl));
    dispatch(setIsEmailVerified(user.isEmailVerified));
    dispatch(setDoctorId(user.id));
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("REFRESHTOKEN");
    sessionStorage.removeItem("ACCESSTOKEN");
    router.push("/sign-in");
  };

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="flex flex-row gap-4 items-center text-sm text-ugray-400">
        <Search size={15} />
        <h4>Search Appointments, Patients or etc.</h4>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row gap-6">
          <Info size={20} />
          <Bell size={20} />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <Avatar>
              <AvatarImage src={imageUrl}/>
              
            </Avatar>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-sm font-medium">{firstName} {lastName}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm opacity-70 line-clamp-1">
                {designation}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
