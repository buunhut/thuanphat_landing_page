import React from "react";
import * as moment from "moment";

const EventItem = ({ item }) => {
  const { date, title, content, img } = item;
  return (
    <div className="eventItem">
      <span>{moment(date).format("DD/MM/YYYY")}</span>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default EventItem;
