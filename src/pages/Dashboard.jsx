import { Typography, Box, IconButton } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Home } from "@mui/icons-material";

function Dashboard() {
  const c1 = "#00518D";

  return (
    <>
      <Header />
      <Sidebar />

      <Box
        sx={{
          margin: "5rem 0 0 5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: c1}}>
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
    </>
  );
}

export default Dashboard;
