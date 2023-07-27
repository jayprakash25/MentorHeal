import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ReadFullBlog() {
  const data = useLocation();

  const { image, Blog } = data.state;

  return (
    <>
      <NavBar />
      <main>
        <div className="flex flex-col items-center justify-center pt-24 mx-16  space-y-9">
          <img
            className="max-w-md md:max-w-lg md:mx-auto rounded-xl"
            src={image}
            alt=""
          />
        </div>

        <div
          className="p-10 md:p-20"
          dangerouslySetInnerHTML={{ __html: Blog }}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
