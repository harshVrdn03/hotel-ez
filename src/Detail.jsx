import { Divider } from "@mui/joy";
import CardGrid from "./components/Detail/CardGrid";
import Heading from "./components/Detail/Heading";
import Info from "./components/Detail/Info";
import Testimonials from "./components/Detail/Testimonal";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useLocation } from 'react-router-dom';


export default function Detail() {
  const location = useLocation();
  const state = location.state;

  console.log(state);
  return (
    <div className=" pt-2  mx-auto ">
      <div className="hidden md:block px-8">
        <Navbar />
      </div>

      <div className="md:w-4/5 h- mx-auto flex flex-col  ">
        <div className="px-2 md:px-0">
          <Heading />

        </div>
        <div>
          <CardGrid />
        </div>

      </div>
      <div className="md:w-4/5 mx-auto px-4 md:px-0">
        <Info />
      </div>
      <div className="pt-4">
        <Divider />
      </div>
      <div className="md:w-4/5 mx-auto px-4 md:px-0">
        <Testimonials />
      </div>
      <div className="py-4">
        <Divider />
      </div>
      <div className="md:w-4/5 mx-auto px-4 md:px-0">
        <Footer />
      </div>
    </div>
  );
}
