import { FaSearch } from "react-icons/fa";

export default function NavbarMenu() {
  return (
    <div className="border-2 shadow-md p-3 px-4 space-x-2 rounded-full flex items-center">
      <span className="font-semibold ">Anywhere</span>
      <div className="border-l h-6"></div>
      <span className="font-semibold">Anyweek</span>
      <div className="border-l h-6"></div>
      <span className="flex items-center space-x-2">
        <span>Add guests</span>
        <FaSearch color="red" />
      </span>
    </div>
  );
}
