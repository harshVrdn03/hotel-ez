import { Box, Button } from "@mui/joy";
import { PiTreePalmLight } from "react-icons/pi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { PiCampfireFill } from "react-icons/pi";

const ChipCarousel = () => {
  const chipData = [
    { label: "Chip ", id: 3, icon: <FaFire size={25} /> },
    { label: "Chip ", id: 4, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip ", id: 5, icon: <PiCampfireFill size={25} /> },
    { label: "Chip ", id: 6, icon: <FaUmbrellaBeach size={25} /> },
    { label: "Chip ", id: 8, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip ", id: 9, icon: <FaFire size={25} /> },
    { label: "Chip", id: 10, icon: <PiCampfireFill size={25} /> },
    { label: "Chip", id: 11, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip", id: 12, icon: <FaUmbrellaBeach size={25} /> },
    { label: "Chip", id: 13, icon: <FaFire size={25} /> },
    { label: "Chip", id: 14, icon: <PiCampfireFill size={25} /> },
    { label: "Chip", id: 15, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip", id: 16, icon: <FaUmbrellaBeach size={25} /> },
    { label: "Chip", id: 17, icon: <FaFire size={25} /> },
    { label: "Chip", id: 18, icon: <PiCampfireFill size={25} /> },
    { label: "Chip", id: 19, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip", id: 20, icon: <FaUmbrellaBeach size={25} /> },
    { label: "Chip", id: 34, icon: <PiCampfireFill size={25} /> },
    { label: "Chip", id: 35, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip", id: 36, icon: <FaUmbrellaBeach size={25} /> },
    { label: "Chip", id: 37, icon: <FaFire size={25} /> },
    { label: "Chip", id: 38, icon: <PiCampfireFill size={25} /> },
    { label: "Chip", id: 39, icon: <PiTreePalmLight size={25} /> },
    { label: "Chip", id: 40, icon: <FaUmbrellaBeach size={25} /> },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        overflowX: "auto",
        "::-webkit-scrollbar": { display: "none" },
        gap: 4,
      }}
    >
      {chipData.map((chip) => (
        // <div
        //   key={chip.id}
        //   className="py-2  flex flex-col items-center text-xs  cursor-pointer hover:border-b border-gray-800"
        // >
        //   {chip.icon}
        //   <span>{chip.label}</span>
        // </div>
        <Button
          color="neutral"
          variant="plain"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {chip.icon}
          {chip.label}
        </Button>
      ))}
    </Box>
  );
};

export default ChipCarousel;
