import React from "react";
import { useSelector } from "react-redux";
import EventItem from "../components/EventItem";

const EventsPage = () => {
  const { event } = useSelector((state) => state.dataSlice);
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Events</h1>
          <div>
            {event?.map((item, index) => {
              return <EventItem item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
