import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ReadFull from "./components/ReadFull";
// import Mentor from "./components/Mentor";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:id" element={<ReadFull />} />
        {/* <Route path="/join" element={<Mentor/>}/> */}
      </Routes>
    </>
  );
};

export default App;
