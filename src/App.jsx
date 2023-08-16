import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Mentor from "./components/Mentor";
import BookForm from "./components/BookForm";
import How from "./components/How";
import ReadFull from "./components/ReadFull";
import { Blog, ReadFullBlog } from "./Pages/index";
import Intern from "./Pages/Intern";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join" element={<Mentor />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/how" element={<How />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/internships" element={<Intern />} />
        <Route path="/ReadFull" element={<ReadFullBlog />} />
      </Routes>
    </>
  );
};

export default App;
