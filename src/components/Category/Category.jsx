import { Button, Switch } from "@mui/joy";
import CategoryCarousel from "./CategoryCarousel";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function Category() {
  return (
    <div className="flex justify-between  max-w-full space-x-4 items-center">
      <CategoryCarousel />
      <div className="hidden md:block">
        <div className="space-x-4" style={{ display: "flex" }}>
          <Button
            color="neutral"
            variant="outlined"
            sx={{
              gap: 1,
            }}
          >
            <TbAdjustmentsHorizontal size={25} />
            Filter
          </Button>
          <Button
            color="neutral"
            variant="outlined"
            sx={{
              gap: 1,
            }}
          >
            Dispaly Total
            <Switch />
          </Button>
        </div>
      </div>
    </div>
  );
}
