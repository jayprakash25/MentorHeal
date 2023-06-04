import NavBar from "./NavBar";
import Tagline from "./Tagline";
import { Card, FirstCard } from "./Card";
import Form from "./Form";
import HeroSection from "./HeroSection";
import Why from "./Why";
import Appointment from "./Appointment";
import Footer from "./Footer";
import TeamCard from "./TeamCard";
import { useRef } from "react";
import Transformation from "./Transformation";
import Events from "./Events";
import Whatsup from "./Whatsup";
import Quote from "./Quote";
export default function Home() {
  const formref = useRef();
  const testimonialref = useRef();

  const Scrolltoref = () => {
    formref.current.scrollIntoView({
      behaviour: "smooth ",
    });
  };
  const Scrolltotestimonial = () => {
    testimonialref.current.scrollIntoView({
      behaviour: "smooth ",
    });
  };

  return (
    <main>
      <NavBar
        Scrolltoref={Scrolltoref}
        Scrolltotestimonial={Scrolltotestimonial}
      />
      <HeroSection Scrolltoref={Scrolltoref} />
      <FirstCard />
      <Tagline />
      <Card />
      <Why />
      <Transformation testimonialref={testimonialref} />
      <TeamCard />
      <Events />
      <Quote />
      <div ref={formref}>
        <Form />
      </div>
      <Whatsup />
      <Appointment />
      <Footer />
    </main>
  );
}
