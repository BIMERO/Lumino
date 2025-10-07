import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  buttonIcon?: React.ReactNode;
  image?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
  icon,
  buttonIcon,
  image,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-[#f5f5f5] px-6 py-9 text-black">
        <div className="flex flex-col gap-6 ">
          {icon && <div className="flex-center">{icon}</div>}
        </div>
        <div className="flex flex-col gap-6 ">
          {icon && <div className="flex-center">{image}</div>}
        </div>
        <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
          {title}
        </h1>
        {children}

        <Button
          className="bg-[#3fa065] focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonIcon && <div className="flex-center">{buttonIcon}</div>} &nbsp;
          {buttonText || "Schedule Meeting"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
