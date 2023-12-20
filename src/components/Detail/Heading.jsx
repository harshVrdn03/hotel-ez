import { Button } from "@mui/joy";
import { IoShareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className="flex justify-between items-center pt-4">
      <Link to="/">
        <h1 className="flex items-center space-x-2 font-semibold text-xl">
          <IoChevronBackSharp />
          <span>Home</span>
        </h1>
      </Link>
      <div>
        <Button variant="plain" color="neutral" className="space-x-2">
          <IoShareOutline />
          <span>share</span>
        </Button>
        <Button variant="plain" color="neutral" className="space-x-2">
          <CiHeart />
          <span>save</span>
        </Button>
      </div>
    </div>
  );
}
