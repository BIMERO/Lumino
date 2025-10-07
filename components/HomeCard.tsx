import { cn } from "@/lib/utils";
import React from "react";

const HomeCard = ({
  className,
  icon,
  title,
  description,
  handleClick,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  handleClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px] text-white">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-lg font-normal text-white">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
