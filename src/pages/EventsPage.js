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
            {/* {event?.map((item, index) => {
              //cần sắp xếp theo thời gian
              return <EventItem item={item} key={index} />;
            })} */}
            {event &&
              [...event] // Tạo một bản sao mới của mảng
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sắp xếp theo thời gian từ mới đến cũ
                .map((item, index) => {
                  return <EventItem item={item} key={index} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
