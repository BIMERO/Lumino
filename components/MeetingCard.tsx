"use client";

import { useToast } from "@/hooks/use-toast";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { MdOutlineContentCopy } from "react-icons/md";

interface MeetingCardProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  isPreviousMeeting: boolean;
  buttonIcon1?: React.ReactNode;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  buttonText,
  handleClick,
  link,
}) => {
  const { toast } = useToast();
  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between bg-[#ffffff] rounded-[14px] bg-white px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <span className="text-xl">{icon}</span>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold capitalize">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>

      <article className={cn("flex justify-between relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>

        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-[#3fa065] px-6">
              {buttonIcon1 && (
                <span className="flex-center">{buttonIcon1}</span>
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-[#3fa065] px-6"
            >
              <MdOutlineContentCopy />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
