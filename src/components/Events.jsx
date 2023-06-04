import React from "react";
import Banner from "../assets/images/Banner1.png";
export default function Events() {
  const Event = {
    Banner: Banner,
  };
  return (
    <>
      <div className="my-28">
        <img
          src={Event.Banner}
          className="h-[55vh] md:h-[70vh] w-screen object-cover"
          alt="banner"
        />
      </div>
    </>
  );
}
