import { useState, useEffect } from 'react'
import { Box,  } from '@mui/material'
import { useParams } from 'react-router-dom'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Details from '../Components/Details'
import ExerciseVideosComponent from '../Components/ExerciseVideosComponent'

const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])

  const { id } = useParams()
  useEffect(() => {
    const fetchExerciseDetails = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetails(exerciseDetailsData)

      const youtubeVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`, youtubeOptions)
      setExerciseVideos(youtubeVideosData.contents)
    }
    fetchExerciseDetails()
  }, [id])
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideosComponent exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
    </Box>
  )
}

export default ExerciseDetail