import { useRef } from "react";
import {
  NavBar,
  Footer,
  HeroSection,
  Tagline,
  Why,
  Quote,
  Whatsup,
  LatestBlogs,
  Steps,
  TeamCard,
  Events,
  Appointment,
  Form,
  Transformation,
  Card,
  FirstCard,
} from "./index";
export default function Home() {
  // refs
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
    <body className="overflow-x-clip">
      <NavBar
        Scrolltoref={Scrolltoref}
        Scrolltotestimonial={Scrolltotestimonial}
      />
      <HeroSection Scrolltoref={Scrolltoref} />
      <FirstCard />
      <Tagline />
      <Card />
      <Steps />
      <Why />
      <LatestBlogs />
      <Transformation testimonialref={testimonialref} />
      <TeamCard />
      <Events />
      <Quote />
      <div ref={formref}>
        <Form />
      </div>
      <Whatsup />
      <Appointment />
      <Footer Scrolltoref={Scrolltoref} />
    </body>
  );
}
