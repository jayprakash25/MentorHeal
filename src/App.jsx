import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ReadFull from "./components/ReadFull";
import Mentor from "./components/Mentor";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join" element={<Mentor/>}/>
        <Route path="/session" element={<BookForm/>}/>
      </Routes>
    </>
  );
};

export default App;
