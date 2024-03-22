import { ILogoLink } from "@/types/socialmedia";
import { Check, Facebook, Instagram } from "lucide-react";

const logoslinks: ILogoLink[] = [
  {
    id: 1,
    link: "https://www.instagram.com/",
    icon: Instagram,
   name: "Unite.Instagram",
  },
  {
    id: 2,
    link: "https://www.facebook.com/",
    icon: Facebook,
   name: "Unite.Facebook",

  },
];
export default logoslinks;
