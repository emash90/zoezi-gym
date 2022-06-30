import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideosComponent = ({ exerciseVideos, name }) => {
    console.log(exerciseVideos);
    if(!exerciseVideos.length) 
        return 'loading...'
    
    return (
        <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
            <Typography variant="h4" mb="33px">
                more <span style={{ color: "#ff2625" }}>{name}</span> videos
                from youtube
            </Typography>
            <Stack
                justifyContent="center"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },
                    gap: { lg: "50px", xs: "0" },
                }}
            >
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    >   
                        <img
                            src={item.video.thumbnails[0].url}
                            alt={item.video.title}
                        />
                        <Box>
                            <Typography variant='h6' color='black'>
                                {item.video.title}
                            </Typography>
                            <Typography fontSize='12px' color='black'>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideosComponent;
