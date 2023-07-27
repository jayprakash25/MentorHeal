import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ReadFull() {
  const data = useLocation();

  const { image, Tittle, Para } = data.state;

  return (
    <>
      <NavBar />
      <main>
        <div className="flex flex-col items-center justify-center pt-24 mx-16 space-y-9">
          <h1 className="max-w-xl text-2xl font-bold leading-9 lg:text-3xl lg:tedxt-3xl">
            {Tittle}
          </h1>
          <img
            className="max-w-md md:max-w-4xl md:mx-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="pb-10 mx-auto px-7 pt-9 lg:max-w-4xl">{Para}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
