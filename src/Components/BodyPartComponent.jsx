import React from "react";
import { Stack, Tyography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { Box, Typography } from "@mui/material";

const BodyPartComponent = ({ part, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={
              bodyPart === part ? {
                borderTop: '4px solid #ff2625',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
              } :  {
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
                
              } 
            }
            onClick={()=> {setBodyPart(part)
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            }}
        >
            <img
                src={Icon}
                alt="dumbell"
                style={{ width: "40px", height: "40px" }}
            />
            <Typography textTransform='capitalize' >{part}</Typography>
        </Stack>
    );
};

export default BodyPartComponent;
