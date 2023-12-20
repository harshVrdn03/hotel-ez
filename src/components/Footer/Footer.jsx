import { Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ListItem = styled("li")({
  fontSize: "16px",
  textDecoration: "none",
  padding: ".3em 0",
  fontWeight: "300",
  color: "white",
});

const Footer = () => {
  return (
    <footer>
      {/* <Container> */}
      <Grid container spacing={4} padding={1} paddingTop={0}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Support</Typography>
          <nav>
            <ul>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Help center
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  AirCover
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Disability support
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Cancellation options
                </Link>
              </ListItem>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Hosting</Typography>
          <nav>
            <ul>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Bookotel your hotel
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Bookotel for Hosts
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Hosting resources
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Community forum
                </Link>
              </ListItem>
              {/* Add more navigation items */}
            </ul>
          </nav>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Bookotel</Typography>
          <nav>
            <ul>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Rooms
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  New features
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Careers
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  sx={{
                    color: "gray",
                    textDecoration: "none",
                    "&:hover": { color: "black" },
                  }}
                >
                  Investers
                </Link>
              </ListItem>
              {/* Add more navigation items */}
            </ul>
          </nav>
        </Grid>
      </Grid>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;

{
  /* <Grid item xs={12} sm={6} md={3}>
<Typography variant="h6">English(IN)   ₹INR</Typography>
<nav>
    <ul>
        <ListItem>
            <Link href="#" sx={{color:"black" , textDecoration:"none" ,'&:hover': { cursor: "pointer" }}}>2023 Bookotel,Inc.</Link>
        </ListItem>
        <ListItem>
            <Link href="#" sx={{color:"black" , textDecoration:"none" ,'&:hover': { cursor: "pointer" }}}>New features</Link>
        </ListItem>
        <ListItem>
            <Link href="#" sx={{color:"black" , textDecoration:"none" ,'&:hover': { cursor: "pointer" }}}>Careers</Link>
        </ListItem>
        <ListItem>
            <Link href="#" sx={{color:"black" , textDecoration:"none" ,'&:hover': { cursor: "pointer" }}}>Investers</Link>
        </ListItem>
    </ul>
</nav>
</Grid> */
}
