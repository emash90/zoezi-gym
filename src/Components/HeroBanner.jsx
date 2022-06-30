import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
            }}
            positon="relative"
            p="20px"
        >
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                fontSize={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }}
            >
                Sweat, Smile <br />
                Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={3}>
                Lets Go !!!
            </Typography>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#FF2625" }}
                href="#exercises"
            >
                Checkout Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
                fontSize="200px"
            >
                ZOEZI
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;
