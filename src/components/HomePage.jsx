import Tagline from "./Tagline";
import { Card, FirstCard } from "./Card";
import Form from "./Form";
import Section9 from "./Section9";
import HeroSection from "./HeroSection";
import Why from "./Why";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FirstCard />
      <Tagline />
      <Card />
      <Why />
      <Form />
      <Section9/>
    </>
  );
};

export default HomePage;
