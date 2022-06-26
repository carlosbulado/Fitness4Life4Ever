import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import allExercises from '../data/allExercises.json';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0,0);

    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exercisesData = allExercises;
      //const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      const exerciseDetailData = exercisesData.filter(
        (exercise) => 
          exercise.id.toLowerCase().includes(id)
        )[0];

      setExerciseDetail(exerciseDetailData);

      //const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      //setExerciseVideos(exerciseVideosData.contents);

      const similarExerciseData = exercisesData.filter(
        (exercise) => 
          exercise.target.toLowerCase().includes(exerciseDetailData.target)
        );

        setSimilarExercises(similarExerciseData);
        
      const equipmentExerciseData = exercisesData.filter(
        (exercise) => 
          exercise.equipment.toLowerCase().includes(exerciseDetailData.equipment)
        );

        setEquipmentExercises(equipmentExerciseData);
    }

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={similarExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail