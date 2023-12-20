import { IoIosSearch } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";

export default function NavbarSearch() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-1 shadow-md items-center space-x-4 rounded-full  border-2 border-gray-300 p-2">
        <IoIosSearch size={25} />
        <div className="flex flex-col flex-1">
          <span className="font-bold">AnyWhere</span>
          <span className="text-sm">Any Week - Add guests</span>
        </div>
      </div>
      <div className="p-2 border-2 border-gray-300 rounded-full">
        <LuSettings2 size={25} />
      </div>
    </div>
  );
}
