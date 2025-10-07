"use client";

import { useCall, VideoPreview, DeviceSettings } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import {Button} from './ui/button';

const MeetingSetup = ({setIsSetUpComplete}:{setIsSetUpComplete: (value: boolean) => void}) => {
  const [isMicOn, setIsMicOn] = useState(false);
  const call = useCall();

  if(!call){
    throw new Error('usecall must be used within the StreamCall component')
  }

  useEffect(() => {
    if(isMicOn){
      call?.camera.disable()
      call?.microphone.disable()
    }else{
      call?.camera.enable()
      call?.microphone.enable()
    }
  }, [isMicOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold text-black">Set up your meeting</h1>
      <VideoPreview />

      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center gap-2 font-medium text-[#09180f]">
          <input type="checkbox" checked={isMicOn} onChange={(e) => setIsMicOn(e.target.checked)}/>
        Join with mic and camera off
        </label>

        <DeviceSettings/>
      </div>
      <Button className="bg-[#3fa065]" onClick={() => {
        call.join();
        setIsSetUpComplete(true);
      }}> Join meeting </Button>
    </div>
  );
};

export default MeetingSetup;
