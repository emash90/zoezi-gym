import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const Details = ({ exerciseDetails }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;
    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: { lg: "row" },
                p: "20px",
                alignItems: "center",
            }}
        >
            <img src={gifUrl} alt={name} loading='lazy' className="detail-image" />
        <Stack sx={{ gap:{ lg: '60px', xs: '20px' }}} >
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
                {name} targets your {target}. 
            </Typography>
            <Typography variant='h4'>
                Equipment: {equipment}
            </Typography>
        </Stack>
        </Stack>
    );
};

export default Details;
