import { Button } from "@mui/joy";
import { RiEarthFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavbarRight() {
  return (
    <div className="flex space-x-2 items-center">
      <Button color="neutral" variant="plain">
        your home
      </Button>
      <Button color="neutral" variant="plain">
        <RiEarthFill size={25} />
      </Button>
      <div className="border-2 border-gray-300 flex rounded-full px-3 py-2 cursor-pointer">
        <GiHamburgerMenu size={30} />
        <HiUserCircle size={30} />
      </div>
    </div>
  );
}
