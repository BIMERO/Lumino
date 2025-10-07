import { GrHomeRounded } from "react-icons/gr";
import { TbCalendarClock, TbCalendarMonth } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export const sidebarLinks = [
  {
    name: "Home",
    route: "/",
    icon: <GrHomeRounded/>,
  },
  {
    name: "Upcoming",
    route: "/upcoming",
    icon: <TbCalendarClock />,
  },
 
  {
    name: "Previous",
    route: "/previous",
    icon: <TbCalendarMonth />,
  },
  {
    name: "Recordings",
    route: "/recordings",
    icon: <IoVideocamOutline />,
  },
   {
    name: "Personal Room",
    route: "/personal-room",
    icon: <FaPlus />,
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
