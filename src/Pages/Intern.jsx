import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Intern() {
  return (
    <div>
      <NavBar />

      <div className="pt-24 flex items-center justify-center bg-[]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfmisHP4T5Qy_kNpaGrbZx0aMJjbUwquQNP-1_-0sV3T9GNwA/viewform?embedded=true"
          width="740"
          height="2200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
}
