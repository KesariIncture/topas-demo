import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography,Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HelpIcon from "@mui/icons-material/Help";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerWidth = isOpen ? 280 : 65;
  const c1 = "#00518D";
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/dashboard" },
    { text: "Talent", icon: <PeopleIcon />, path: "/talent" },
    { text: "Demand", icon: <TrendingUpIcon />, path: "/demand" },
    { text: "Timesheet", icon: <AccessTimeIcon />, path: "/timesheet" },
    { text: "Projects", icon: <FolderIcon />, path: "/projects" },
    { text: "Skill", icon: <BuildIcon />, path: "/skill" },
    { text: "Feedback", icon: <FeedbackIcon />, path: "/feedback" },
    { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
    { text: "Help", icon: <HelpIcon />, path: "/help" }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f8fafc",
          borderRight: "1px solid rgba(0, 81, 141, 0.12)",
          transition: "width 0.3s ease",
          mt: "64px", 
          height: "calc(100vh - 64px)",
          overflowX: "hidden",
          overflowY: "hidden", 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        },
      }}
    >
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column",
        height: "100%"
      }}>
        
        <Box sx={{ 
          display: "flex", 
          justifyContent: "flex-end", 
          p: 0.5,
          borderBottom: "1px solid rgba(0, 81, 141, 0.12)"
        }}>
          <IconButton 
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 81, 141, 0.08)'
              }
            }}
          >
            <MenuOpenIcon 
              sx={{ 
                transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease",
                color: c1
              }} 
            />
          </IconButton>
        </Box>

       
        <List sx={{ px: 1, py: 1 }}>
  {menuItems.map((item) => {
    const isActive = location.pathname === item.path;
    return (
      <Tooltip
        title={isOpen ? "" : item.text}
        placement="right"
        arrow
        key={item.text}
      >
        <ListItem
          component={Link}
          to={item.path}
          sx={{
            borderRadius: "8px",
            mb: 0.3,
            py: 1,
            color: isActive ? "white" : c1,
            backgroundColor: isActive ? c1 : "transparent",
            "&:hover": {
              backgroundColor: isActive ? c1 : "rgba(0, 81, 141, 0.08)",
              transform: "translateX(5px)",
              transition: "transform 0.2s ease-in-out",
            },
            transition: "all 0.2s ease-in-out",
            textDecoration: "none",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: isOpen ? 35 : "100%",
              color: isActive ? "white" : c1,
              justifyContent: isOpen ? "flex-start" : "center",
              "& .MuiSvgIcon-root": {
                fontSize: "1.3rem",
              },
            }}
          >
            {item.icon}
          </ListItemIcon>
          {isOpen && (
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {item.text}
                </Typography>
              }
            />
          )}
        </ListItem>
      </Tooltip>
    );
  })}
</List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;