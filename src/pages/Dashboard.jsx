import  { useState } from 'react';
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
import { Home, Report, ScheduleRounded, WorkHistoryRounded } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Dashboard() {
  const c1 = "#00518D";
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    }
  });

  const events = [
    {
      title: '8 hrs 30 min',
      start: '2025-01-02',
    },
    {
      title: '7 hrs 45 min',
      start: '2025-01-05',
    },
    {
      title: '8 hrs 15 min',
      start: '2025-01-09',
    },
    {
      title: '6 hrs 30 min',
      start: '2025-01-12',
    },
    {
      title: '9 hrs 00 min',
      start: '2025-01-15',
    }
  ];


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

          {/* Cards Section */}
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
            {/* First Card */}
            <Card
              sx={{
                
                width: {
                  xs: "fit-content",
                  md: 300,
                },
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around",  }}>
                <ScheduleRounded style={{ color: "#FFA000", fontSize: 50 }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold",  }}>
                    0 hr 0 mins
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Total Working Hours
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "2px" }} />
              <Box sx={{ display: "flex", justifyContent: "space-around", gap: { xs: 2, md: 0 } }}>
                <Typography>WFO: <b>0 hrs 0 min</b></Typography>
                <Divider orientation="vertical" flexItem />
                <Typography>WFH: <b>0 hrs 0 min</b></Typography>
              </Box>
            </Card>

            {/* Second Card */}
            <Card
              sx={{
                width: {
                  xs: "fit-content",
                  md: 300,
                },
                padding: "10px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <WorkHistoryRounded style={{ color: "green", fontSize: 50 }} />
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
                    Relevant Timesheet Hours
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "2px" }} />
              <Box sx={{ display: "flex", justifyContent: "space-around", gap: { xs: 2, md: 0 } }}>
                <Typography>Leave: <b>0 hrs 0 min</b></Typography>
                <Divider orientation="vertical" flexItem />
                <Typography>Holiday: <b>0 hrs 0 min</b></Typography>
              </Box>
            </Card>
          </Box>

          { tabValue === 0 && (
              <h1>Table</h1>
            )
          }

          {/* Calendar Section */}
          {tabValue === 1 && (
            <Box sx={{ 
              marginTop: "2rem",
              '& .fc': {
                fontFamily: 'monospace',
              },
              '& .fc-toolbar-title': {
                color: c1,
                fontSize: {
                  xs: '1.2rem',
                  sm: '1.5rem',
                },
              },
              '& .fc-button': {
                backgroundColor: c1,
                borderColor: c1,
                '&:hover': {
                  backgroundColor: `${c1}dd`,
                },
              },
              '& .fc-event': {
                cursor: 'pointer',
              },
              ' & .fc-toolbar' : {
                flexDirection: {
                  xs: 'column',
                  sm: 'row'
                },
                gap: {
                  xs: '0.5rem',
                  sm: '1rem'
                },
              },
              '& .fc-col-header-cell': {
                backgroundColor: '#ECF8F9'
              },
              '& .fc-daygrid-event': {
                backgroundColor: c1,
                border: 'none',
                borderRadius: {
                  xs: '50%',
                  sm: '4px'
                },
                padding: {
                  xs: '4px',
                  sm: '2px 4px',
                  md: '10px'
                },
                width: {
                  xs: '8px',
                  sm: 'auto'
                },
                height: {
                  xs: '8px',
                  sm: 'auto'
                },
                display: {
                  xs: 'inline-block',
                  sm: 'block'
                },
                justifyContent: {
                  sm: 'center'
                },
                fontSize: {
                  xs: '0px',
                  sm: '1rem'
                },
                fontWeight: 'bold',
              }
            }}>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'title',
                  right: 'prev,next today'
                }}
                height="auto"
                events={events.map(event => {
                  const hours = parseFloat(event.title.split(' ')[0]);
                    return {
                    ...event,
                    backgroundColor: hours >= 9 ? '#A6CF98' : '#F28585',
                    textColor: hours >= 9 ? '#707070' : '#FFFFFF'
                    };
                })}
              />
            </Box>
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Dashboard;