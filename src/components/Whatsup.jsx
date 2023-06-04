import React from "react";
import whatsup from "../assets/images/whatsapp.png";
export default function Whatsup() {
  const sendMessage = () => {
    const message = "Hey MentorHeal I would Love to Join the Commity";

    const url = `https://web.whatsapp.com/send?phone=${8317680338}&text=${message}&app_absent=0`;

    window.open(url);
  };

  return (
    <div className="flex justify-end mx-10">
      <div className="fixed bottom-10 z-50 ">
        <img
          src={whatsup}
          onClick={sendMessage}
          alt="whatup"
          className="w-12 h-12  cursor-pointer"
        />
      </div>
    </div>
  );
}
