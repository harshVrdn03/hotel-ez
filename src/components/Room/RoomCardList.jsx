import RoomCard from "./RoomCard";
import RoomData from "../../data/RoomData";
import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

const RoomCardList = () => {
  return (
    <div className="pb-8">
      <Grid container spacing={3}>
        {RoomData.map((roomData, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Link to="/detail">
              <RoomCard room={roomData} />
            </Link>
          </Grid>
        ))}
      </Grid>

      <div className="text-center pt-8">
        <Button
          size="md"
          sx={{
            backgroundColor: "black",
            "&:hover": { backgroundColor: "grey" },
          }}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

export default RoomCardList;
