import { SideMenuItems } from "@/types/side-menu";
import {
  User,
  Settings,
  LayoutGridIcon,
  Calendar,
  MessageSquareMore
} from "lucide-react";

export const sideMenuItems: SideMenuItems[] = [
  {
    id: 1,
    path: "/dashboard/overview",
    icon: LayoutGridIcon,
    description: "Overview",
  },
  {
    id: 2,
    path: "/dashboard/appointments",
    icon: Calendar,
    description: "Appointments",
  },
  {
    id: 3,
    path: "/dashboard/doctors",
    icon: User,
    description: "Doctors",
  },
  {
    id: 4,
    path: "/dashboard/messages",
    icon: MessageSquareMore,
    description: "Messages",
  },
  {
    id: 5,
    path: "/dashboard/settings",
    icon: Settings,
    description: "Settings",
  },
];
