"use client";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF3E0", // Light retro background color
        minHeight: "100vh",
        padding: "40px 0",
        position: "relative", // For absolute positioning of text
        overflow: "hidden", // Hide any overflow
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "75%",
          height: "40vh",
          margin: "10px auto",
        }}
      >
        <Box
          component="img"
          src="/images/hero-img1.jpg"
          alt="Pantry management"
          sx={{
            position: "relative",
            top: -20,
            left: 0,
            width: "100%",
            height: "120%",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            position: "absolute",
            textAlign: "left",
            width: "100px",
            top: "20%",
            left: "5%",
            color: "#3E2723", // Retro dark brown
            padding: "20px",
            borderRadius: "8px",
            transform: "translateY(-20%)", // Adjust vertical alignment
          }}
        >
          Welcome to Fresh<span style={{ color: "#FFB300" }}>Eats</span>
        </Typography>
      </Box>

      <Container>
        {/* Key Features Section */}
        <Stack spacing={4} alignItems="center" sx={{ marginTop: "40px" }}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: "#3E2723", marginBottom: "20px" }}
          >
            Key Features
          </Typography>
          <Stack direction="row" spacing={4} justifyContent="center">
            <Box
              sx={{
                width: "300px",
                padding: "25px",
                borderRadius: "8px",
                backgroundColor: "#FFF3E0",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#3E2723", marginBottom: "10px" }}
              >
                Track Inventory
              </Typography>
              <Typography variant="body1" sx={{ color: "#6D4C41" }}>
                Easily keep track of the items in your pantry, including
                quantities and expiration dates.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "300px",
                padding: "25px",
                borderRadius: "8px",
                backgroundColor: "#FFF3E0",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#3E2723", marginBottom: "10px" }}
              >
                Manage Items
              </Typography>
              <Typography variant="body1" sx={{ color: "#6D4C41" }}>
                Add new items, adjust quantities, and remove items as needed to
                keep your pantry organized.
              </Typography>
            </Box>
          </Stack>
        </Stack>
        {/* Action Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "40px" }}
        >
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            sx={{
              backgroundColor: "#FFB300", // Darker, more vibrant yellow
              color: "#3E2723", // Retro dark brown
              "&:hover": {
                backgroundColor: "#388E3C", // Darker green for hover
              },
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            href="/signin"
            variant="outlined"
            sx={{
              color: "#FFB300", // Darker, more vibrant yellow
              borderColor: "#FFB300", // Darker, more vibrant yellow
              "&:hover": {
                borderColor: "#388E3C", // Darker green for hover
                color: "#388E3C", // Darker green for text on hover
              },
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
