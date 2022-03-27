import { Box, Button, CardActions } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import ResultCard from '../../components/viewModel/Result/ResultCard'
import Link from 'next/link';

const Results: NextPage = () => {
  return (
    <Box>
      <ResultCard />
      <CardActions sx={{display: "flex", justifyContent: "space-around"}}>
        <Link href="/myAchievements/SaveMyAchievement" as="save" passHref>
          <Button variant="outlined" color="inherit" size="large" sx={{my: 3, py: 1, px: 2}}>
            <SaveIcon />&ensp; Save
          </Button>
        </Link>
        <Button variant="outlined" color="inherit" size="large" sx={{my: 3, py: 1, px: 2}}>
          <ShareIcon />&ensp;  Share
        </Button>
      </CardActions>
    </Box>
  )
}

export default Results
