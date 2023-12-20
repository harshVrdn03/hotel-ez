import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { AiFillStar } from "react-icons/ai";

export default function RoomCard({ room }) {
  return (
    <Card sx={{ width: "auto", padding: 0, border: 0 }}>
      <AspectRatio minHeight="300px" maxHeight="300px">
        <img src={room.imageUri} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography fontSize="md" fontWeight="lg">
                {room.location}
              </Typography>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <AiFillStar />
              </IconButton>
              <Typography
                level="body-xs"
                fontSize="md"
                fontWeight="sm"
                sx={{ color: "black" }}
              >
                {room.rating}
              </Typography>
            </div>
          </div>
          <Typography level="body-sm">
            {room.distance} kilometres away
          </Typography>
          <Typography level="body-sm">{room.date}</Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize="md" fontWeight="lg">
              ₹{room.price}
            </Typography>
            <Typography
              level="body-xs"
              fontSize="md"
              fontWeight="sm"
              sx={{ color: "black", marginLeft: "0.3rem" }}
            >
              {room.stay}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
