"use client";
//@ts-nocheck

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { TbCalendarMinus, TbCalendarTime } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";
import { IoPlayOutline } from "react-icons/io5";
import Loader from "./Loader";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, recordingCalls, isLoading } =
    useGetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "upcoming":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Ended Meetings";
      case "upcoming":
        return "No Upcoming Meetings";
      case "recordings":
        return "No Recordings";
      default:
        return "No Meetings";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        recordingCalls?.map((meeting) => meeting.queryRecordings()) ?? []
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, recordingCalls]);

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting) => {
          const dateString =
            (meeting as Call).state?.startsAt ||
            (meeting as CallRecording).start_time;

          const formattedDate = dateString
            ? new Date(dateString).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "";

          return (
            <MeetingCard
              key={(meeting as Call).id}
              icon={
                type === "ended" ? (
                  <TbCalendarMinus />
                ) : type === "upcoming" ? (
                  <TbCalendarTime />
                ) : (
                  <BsCameraVideo />
                )
              }
              title={
                (meeting as Call).state?.custom.desc.substring(0, 20) + "..." ||
                (meeting as CallRecording).filename.substring(0, 20) ||
                "No Title"
              }
              date={formattedDate}
              isPreviousMeeting={type === "ended"}
              buttonIcon1={
                type === "recordings" ? <IoPlayOutline /> : undefined
              }
              buttonText={type === "recordings" ? "Play" : "Start"}
              handleClick={
                type === "recordings"
                  ? () => router.push(`${(meeting as CallRecording).url}`)
                  : () => router.push(`/meeting/${(meeting as Call).id}`)
              }
              link={
                type === "recordings"
                  ? (meeting as CallRecording).url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                      (meeting as Call).id
                    }`
              }
            />
          );
        })
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
