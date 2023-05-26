import Tagline from "./Tagline";
import { Card, FirstCard } from "./Card";
import Form from "./Form";
import HeroSection from "./HeroSection";
import Why from "./Why";
import Appointment from "./Appointment";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FirstCard />
      <Tagline />
      <Card />
      <Why />
      <Form />
      <Appointment/>
    </>
  );
};

export default HomePage;
