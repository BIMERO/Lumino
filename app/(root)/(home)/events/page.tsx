import React from "react";
import CallList from "@/components/CallList";

const Events = () => {
  return (
    <section className="flex size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default Events;
