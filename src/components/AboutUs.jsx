import OurStory from "./OurStory";
import OurMission from "./OurMission";
import HeroAbout from "./HeroAbout";
import OurVision from "./OurVision";
import NavBar from "./NavBar";
import Whatsup from "./Whatsup";

const AboutUs = () => {
  return (
    <main>
      {/* About us Navbar........ */}
      <NavBar />
      {/* Herosection........ */}
      <HeroAbout />
      {/* our story...... */}
      <OurStory />
      {/* Our mission section..... */}
      <OurMission />
      {/* Our Vision Section...... */}
      <OurVision />
      {/* Whastup icons...... */}
      <Whatsup />
      {/* About us end...... */}
    </main>
  );
};

export default AboutUs;
