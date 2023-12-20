import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarRight from "./NavbarRight";
import NavbarSearch from "./NavbarSearch";

export default function Navbar() {
  return (
    <div className="flex flex-1 justify-between items-center pt-2">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="md:hidden flex-1 ">
        <NavbarSearch />
      </div>
      <div className="hidden md:block  rounded-full  justify-self-start">
        <NavbarMenu />
      </div>
      <div className="hidden md:block justify-self-end	">
        <NavbarRight />
      </div>
    </div>
  );
}
