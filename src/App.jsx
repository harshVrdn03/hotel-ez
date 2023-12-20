import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import RoomCardList from "./components/Room/RoomCardList";
import Footer from "./components/Footer/Footer";
import FooterTop from "./components/Footer/FooterTop";
import { Divider } from "@mui/joy";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="px-4 md:px-8 py-2">
        <Navbar />
      </div>
      <div className="w-full px-4 md:px-8">
        <Category />
      </div>
      <div className=" flex-1 overflow-y-scroll  ">
        <div className="px-4 md:px-20 pt-8 pb-8">
          <RoomCardList />
        </div>

        <Divider></Divider>
        <div className=" px-4 md:px-20 pt-8 pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
