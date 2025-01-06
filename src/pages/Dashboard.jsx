import {
  Typography,
  Box,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Card,
  Divider,
} from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Home, Report, ScheduleRounded } from "@mui/icons-material";
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
              Risk Management and Seven Keys have been moved to{" "}
              <a
                href="https://promis.cherrywork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROMISE Portal
              </a>
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
        <Box
          sx={{
            backgroundColor: "#ECF8F9",
            width: "fit-content",
            padding: "5px",
            marginTop: "2rem",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <Typography variant="h6" sx={{ color: c1, fontWeight: "bold" }}>
            Attendance
          </Typography>
        </Box>
        <Paper elevation={2} sx={{ marginTop: "3px", padding: "10px" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: c1 } }}
            textColor="inherit"
          >
            <Tab
              label="Week View"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                color: tabValue === 0 ? c1 : "inherit",
              }}
            />
            <Tab
              label="Month View"
              sx={{
                fontFamily: "monospace",
                fontWeight: "bold",
                color: tabValue === 1 ? c1 : "inherit",
              }}
            />
          </Tabs>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "space-around",
                sm: "space-around",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: 2,
                sm: 2,
              },
              alignItems: {
                xs: "center",
              },
            }}
          >
            <Card
              sx={{
                width: {
                  xs: "fit-content",
                  md: 275,
                },
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <ScheduleRounded style={{ color: "#FFA000", fontSize: 50 }} />{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    0 hr 0 mins
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Total Working Hours
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx = {{display: "flex", justifyContent: "space-around", gap: {xs: 2, md: 0}}}>
                  <Typography>WFO: <b>0 hrs 0 min</b></Typography>
                  <Divider orientation="vertical"  flexItem/>
                  <Typography>WFH: <b>0 hrs 0 min</b></Typography>
              </Box>
            </Card>

            <Card
              sx={{
                width: {
                  xs: "fit-content",
                  md: 275,
                },
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <ScheduleRounded style={{ color: "#FFA000", fontSize: 50 }} />{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    0 hr 0 mins
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Total Working Hours
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Dashboard;
