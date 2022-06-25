import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise, index }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button sx={{
                ml: '21px', color: '#FFF', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalized'
            }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{
                ml: '21px', color: '#FFF', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalized'
            }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalized" fontSize="22px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard