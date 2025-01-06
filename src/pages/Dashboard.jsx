import {
  Typography,
  Box,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Card,
  Divider,
  Container,
  Fade,
  Grow,
} from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { 
  Home, 
  Report, 
  ScheduleRounded, 
  WorkHistoryRounded 
} from "@mui/icons-material";
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

      <Container 
        sx={{ 
          marginLeft: "5rem",
          marginTop: "5rem",
          maxWidth: "calc(100% - 5rem) !important",
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Fade in timeout={800}>
          <Box>
            <Paper 
              elevation={3}
              sx={{
                backgroundColor: "#fff3f3",
                py: 0.5,
                mb: 3,
                borderRadius: 2,
              }}
            >
              <Marquee gradientWidth={50}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", px: 2 }}>
                  <Typography
                    sx={{
                      color: "error.main",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Report fontSize="small" />
                    Important:
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    Risk Management and Seven Keys have been moved to{" "}
                    <a
                      href="https://promis.cherrywork.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: c1,
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "color 0.2s ease-in-out",
                      }}
                    >
                      PROMISE Portal
                    </a>
                  </Typography>
                </Box>
              </Marquee>
            </Paper>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: c1,
                  fontWeight: 500,
                }}
              >
                Welcome, <Box component="span" sx={{ fontWeight: 700 }}>Kesari Nandan</Box>
              </Typography>
              <IconButton
                sx={{
                  color: c1,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(0, 81, 141, 0.1)",
                    transform: "scale(1.1)",
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
                px: 3,
                py: 1,
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Typography variant="h6" sx={{ color: c1, fontWeight: 700 }}>
                Attendance
              </Typography>
            </Box>

            <Paper 
              elevation={4} 
              sx={{ 
                mt: "3px", 
                p: 3,
                borderRadius: "0 10px 10px 10px",
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleChange}
                TabIndicatorProps={{ 
                  style: { 
                    backgroundColor: c1,
                    height: 3,
                  } 
                }}
                textColor="inherit"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                {['Week View', 'Month View'].map((label, index) => (
                  <Tab
                    key={label}
                    label={label}
                    sx={{
                      fontWeight: 600,
                      color: tabValue === index ? c1 : 'text.secondary',
                      transition: 'color 0.2s ease-in-out',
                      '&:hover': {
                        color: c1,
                      },
                    }}
                  />
                ))}
              </Tabs>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "space-around",
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: 3,
                  alignItems: "center",
                }}
              >
                {[
                  {
                    icon: <ScheduleRounded sx={{ color: "#FFA000", fontSize: 56 }} />,
                    title: "Total Working Hours",
                    hours: "0 hr 0 mins",
                    details: [
                      { label: "WFO", value: "0 hrs 0 min" },
                      { label: "WFH", value: "0 hrs 0 min" },
                    ],
                  },
                  {
                    icon: <WorkHistoryRounded sx={{ color: "success.main", fontSize: 56 }} />,
                    title: "Relevant Timesheet Hours",
                    hours: "0 hr 0 mins",
                    details: [
                      { label: "Leave", value: "0 hrs 0 min" },
                      { label: "Holiday", value: "0 hrs 0 min" },
                    ],
                  },
                ].map((item, index) => (
                  <Grow 
                    key={item.title}
                    in 
                    timeout={1000 + (index * 200)}
                  >
                    <Card
                      elevation={3}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: 320,
                        },
                        p: 2.5,
                        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 8,
                        },
                      }}
                    >
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}>
                        {item.icon}
                        <Box sx={{ textAlign: "left" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                            {item.hours}
                          </Typography>
                          <Typography 
                            sx={{ 
                              fontWeight: 600,
                              color: "text.secondary",
                              fontSize: "0.9rem",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ 
                        display: "flex", 
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}>
                        {item.details.map((detail, idx) => (
                          <Box key={detail.label}>
                            <Typography 
                              sx={{ 
                                color: "text.secondary",
                                fontSize: "0.9rem",
                              }}
                            >
                              {detail.label}:{" "}
                              <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
                                {detail.value}
                              </Box>
                            </Typography>
                            {idx < item.details.length - 1 && (
                              <Divider 
                                orientation="vertical" 
                                flexItem 
                                sx={{ mx: 2 }}
                              />
                            )}
                          </Box>
                        ))}
                      </Box>
                    </Card>
                  </Grow>
                ))}
              </Box>
            </Paper>
          </Box>
        </Fade>
      </Container>
    </>
  );
}

export default Dashboard;