import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Landing() {
  const words = ["Talent", "Optimization", "Planning", "Allocation", "System"];
  const c1 = "#00518D"

  return (
    <>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "60%",
            md: "30%", 
            lg: "20%", 
          },
          margin: {
            lg: "2rem",
          },
          marginTop: {
            xs: "2rem",
          },
        }}
      >
        <img src="https://cherrywork.com/wp-content/uploads/2021/12/Cherrywork-Logo-2022_Original-Red-in-white-BG-2.svg"></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: {
            lg: "35%",
            md: "15%",
          },
          flexDirection: {
            sm: "column",
            lg: "row",
            xs: "column",
            md: "row"
          },
        }}
      >
        <Box
          component="img"
          src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5423.jpg?semt=ais_hybrid"
          sx={{
            width: {
              lg: "35%",
              md: "35%",
            },
            marginTop: {
              xs: "2rem",
              lg: "0rem",
              md: "8rem"
            }
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem"
          }}
        > 


          <Box sx = {{display:'flex', justifyContent: "center", gap: "2px"}}>
          <Typography component = "img" src = "https://media.licdn.com/dms/image/v2/C560BAQEVffdnzZzV_w/company-logo_200_200/company-logo_200_200/0/1630647812946/cherrywork__logo?e=2147483647&v=beta&t=nlGCFm7FW65DejDbbVYuj-MrO3MLrq5NZzcTcrDclbg"
           sx = {{height: "80px"}}/>

          <Typography sx={{ fontWeight: "bold", fontSize: "4rem", color: c1 }}>TOPAS</Typography>
          </Box>
          <Typography sx={{ textAlign: "center", fontWeight: "bold", color: c1 }}>
            {words.map((word, index) => (
              <span key={index}>
                <span style={{ color: "red", marginLeft: "2px" }}>{word.charAt(0)}</span>
                {word.slice(1)}
                {index < words.length - 1 && " "}
              </span>
            ))}
          </Typography>
          <Button variant="outlined" sx={{ borderRadius: "50px", borderColor: c1, color: c1, fontWeight: "bold", padding: "10px" }}>
            Proceed <ArrowForwardIcon sx={{ paddingLeft: "5px" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Landing;
