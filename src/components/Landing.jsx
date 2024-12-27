import { Box, Button, Typography, Container, Fade, Zoom } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Landing() {
  const words = ["Talent", "Optimization", "Planning", "Allocation", "System"];
  const c1 = "#00518D";

  return (
    <Container maxWidth="xxl">
      <Fade in timeout={1000}>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "60%",
              md: "30%",
              lg: "20%",
            },
            mx: { xs: 3, xl: 4, md: 0},
            mt: { xs: 3 },
          }}
        >
          <img 
            src="https://cherrywork.com/wp-content/uploads/2021/12/Cherrywork-Logo-2022_Original-Red-in-white-BG-2.svg"
            alt="Cherrywork Logo"
            style={{ width: '80%', height: 'auto' }}
          />
        </Box>
      </Fade>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: "10%", lg: "15%" },
          flexDirection: { xs: "column", md: "row" },
          mt: { xs: 4, md: 8 },
          minHeight: "calc(100vh - 300px)",
        }}
      >
        <Zoom in timeout={1500}>
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5423.jpg?semt=ais_hybrid"
            alt="Team Selection"
            sx={{
              width: { xs: "80%", sm: "60%", md: "40%" },
              maxWidth: {lg: "400px", xl: "600px"},
              height: "auto",
              filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Zoom>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            maxWidth: "600px",
          }}
        >
          <Fade in timeout={2000}>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1,
                mb: 2 
              }}
            >
              <Box
                component="img"
                src="https://media.licdn.com/dms/image/v2/C560BAQEVffdnzZzV_w/company-logo_200_200/company-logo_200_200/0/1630647812946/cherrywork__logo?e=2147483647&v=beta&t=nlGCFm7FW65DejDbbVYuj-MrO3MLrq5NZzcTcrDclbg"
                sx={{ 
                  height: { xs: "60px", md: "80px" },
                  width: "auto",
                }}
                alt="Cherrywork Icon"
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "3rem", md: "4rem" },
                  color: c1,
                  letterSpacing: "0.02em",
                }}
              >
                TOPAS
              </Typography>
            </Box>
          </Fade>

          <Fade in timeout={2500}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                color: c1,
                mb: 3,
                letterSpacing: "0.5px",
              }}
            >
              {words.map((word, index) => (
                <span key={index}>
                  <span 
                    style={{ 
                      color: "#ff1744",
                      marginLeft: "4px",
                      fontWeight: 700
                    }}
                  >
                    {word.charAt(0)}
                  </span>
                  {word.slice(1)}
                  {index < words.length - 1 && " "}
                </span>
              ))}
            </Typography>
          </Fade>

          <Fade in timeout={3000}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "50px",
                borderColor: c1,
                color: c1,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  borderColor: c1,
                  backgroundColor: c1,
                  color: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0, 81, 141, 0.2)",
                },
              }}
            >
              Proceed
            </Button>
          </Fade>
        </Box>
      </Box>
    </Container>
  );
}

export default Landing;