import { Box, AppBar, Toolbar, Typography,IconButton, Badge } from "@mui/material";
import { Link } from "react-router";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const c1 = "#00518D";  

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link to="/dashboard">
            <Box
              component="img"
              src="https://media.licdn.com/dms/image/v2/C560BAQEVffdnzZzV_w/company-logo_200_200/company-logo_200_200/0/1630647812946/cherrywork__logo?e=2147483647&v=beta&t=nlGCFm7FW65DejDbbVYuj-MrO3MLrq5NZzcTcrDclbg"
              sx={{ 
                height: "40px",
                width: "auto",
                cursor: "pointer"
              }}
              alt="Cherrywork Icon"
            />
          </Link>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: c1,
              letterSpacing: "0.02em",
              display: { xs: "none", sm: "block" }
            }}
          >
            TOPAS
          </Typography>
        </Box>

    
    

     
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            sx={{ 
              color: c1,
              '&:hover': {
                backgroundColor: 'rgba(0, 81, 141, 0.1)'
              }
            }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
          <IconButton
            sx={{ 
              color: c1,
              '&:hover': {
                backgroundColor: 'rgba(0, 81, 141, 0.1)'
              }
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;