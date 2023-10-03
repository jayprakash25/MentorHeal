import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { HeroSection, Mentors } from "./../index";

export default function FindMentors() {
  const [filterCategeory, setfilterCategeory] = useState();

  return (
    <main>
      <NavBar />
      <HeroSection setfilterCategeory={setfilterCategeory} />
      <Mentors filterCategeory={filterCategeory} />
      <Footer />
    </main>
  );
}
