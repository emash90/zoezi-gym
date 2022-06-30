import { useEffect, useState } from "react";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyPartCategory from "../Components/BodyPartCategory";

const SearchExercises = ({ setBodyPart, bodyPart, setExercises }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            );
            setBodyParts(["all", ...bodyPartsData]);
        };
        fetchExerciseData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );
            const searchedExercises = exerciseData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search)
            );
            setSearch("");
            setExercises(searchedExercises);
        }
    };
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="50px"
                textAlign="center"
            >
                Explore Awesome Zoezi Exercises
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLocaleLowerCase());
                    }}
                    placeholder="Zoezi Search"
                    type="text"
                    sx={{
                        input: {
                            fontWeight: "700px",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                    }}
                />
                <Button
                    className="search-btn"
                    sx={{
                        backgroundColor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: 0,
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ postion: "relative", width: "100%", p: "20px" }}>
                <BodyPartCategory bodyParts={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
