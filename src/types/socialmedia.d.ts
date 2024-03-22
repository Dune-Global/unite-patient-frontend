import { ILucideIcon } from "./lucideIcon";

export interface ILogoLink {
  id: number;
  link: string;
  icon: React.ComponentType<ILucideIcon>;
  name: string;
}
