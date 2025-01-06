import { Typography, Box, IconButton, Paper, Tabs, Tab } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Home, Report } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import { useState } from "react";



function Dashboard() {
  const c1 = "#00518D";

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
            <Typography sx={{ fontWeight: "bold" }}>
              Risk Management and Seven Keys have been moved to <a href="https://promis.cherrywork.com/" target="_blank" rel="noopener noreferrer">PROMISE Portal</a>
            </Typography>
          </Box>
        </Marquee>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ color: c1 }}>
            Welcome, <b>Kesari Nandan</b>
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
        <Box sx={{ backgroundColor: "#ECF8F9", width: "fit-content", padding: "5px", marginTop: "2rem", borderRadius: "10px 10px 0 0" }}>
          <Typography variant="h6" sx={{ color: c1, fontWeight: "bold" }}>Attendance</Typography>
        </Box>
        <Paper elevation={2} sx={{ marginTop: "3px" }}>
          <Tabs 
            value={tabValue} 
            onChange={handleChange} 
            TabIndicatorProps={{ style: { backgroundColor: c1 } }}
            textColor="inherit"
          >
            <Tab label="Week View" sx={{ fontFamily: "monospace", fontWeight: "bold", color: tabValue === 0 ? c1 : "inherit" }} />
            <Tab label="Month View" sx={{ fontFamily: "monospace", fontWeight: "bold", color: tabValue === 1 ? c1 : "inherit" }} />
          </Tabs>
        </Paper>
      </Box>
    </>
  );
}

export default Dashboard;
