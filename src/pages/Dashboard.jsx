import { Typography, Box, IconButton } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Home, Report } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";


function Dashboard() {
  const c1 = "#00518D";

  return (
    <>
      <Header />
      <Sidebar />

      <Box sx={{ margin: "5rem 0 0 5rem" }}>
        <Marquee>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Typography
              sx={{
                color: "red",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Report fontSize="small" />
              Important:
            </Typography>
            <Typography sx = {{fontWeight: "bold"}}>
              Risk Management and Seven Keys have been moved to <Link>Promise PORTAL</Link>
            </Typography>
          </Box>
        </Marquee>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ color: c1 }}>
            Welcome, Kesari Nandan
          </Typography>
          <IconButton
            sx={{
              color: c1,
              "&:hover": {
                backgroundColor: "rgba(0, 81, 141, 0.1)",
              },
            }}
          >
            <Home />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
