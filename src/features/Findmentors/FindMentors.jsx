import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { HeroSection, Mentors } from "./../index";

export default function FindMentors() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Mentors />
      <Footer />
    </main>
  );
}
