import { useRecoilValue } from 'recoil'
import { Box, Card, Divider, Typography } from '@mui/material'
import { selectBestAction } from '../Action/ActionState';
import { selectRootCause } from '../Why/WhyState';
import { CardHeader } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import React from 'react';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import AnalysisFigure from './AnalysisFigure';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { yellow } from '@mui/material/colors';
import { Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';

export const ResultCard: React.FC = () => {

  const RootCause = useRecoilValue(selectRootCause);
  const BestAction = useRecoilValue(selectBestAction);

  return (
    <Card sx={{bgcolor: "white"}}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}} >
        <AddTaskIcon/>
        <CardHeader title="My Achievement" />
      </Box>
      <Divider />
      <CardContent sx={{display: "grid", justifyContent: "center"}}>
        <AnalysisFigure />
        <Box sx={{display: "flex", justifyContent: "center", my: 2}}>
          <ArrowDownwardIcon/>
          <Typography>WHY?</Typography>
        </Box>
        <Card elevation={1}
          sx={{bgcolor: "#F5F5F5", width: "300px", height: "100px", justifySelf: "center"}}>
          <CardHeader subheader="root cause"  subheaderTypographyProps={{color: yellow[700]}}
            sx={{p: 0.1, textAlign: "center"}}
          />
          <CardContent sx={{p: 1}}>{RootCause?.cause}</CardContent>
        </Card>
        <Box sx={{display: "flex", justifyContent: "center", my: 2}}>
          <ArrowDownwardIcon/>
          <Typography>THEN...</Typography>
        </Box>
        <Card elevation={1}
          sx={{bgcolor: "#F5F5F5", width: "300px", height: "100px", justifySelf: "center"}}>
          <CardHeader subheader="my action"  subheaderTypographyProps={{color: yellow[700]}}
            sx={{p: 0.1, textAlign: "center"}}
          />
          <CardContent sx={{p: 1}}>{BestAction?.plan}</CardContent>
        </Card>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-around"}}>
        <Button variant="outlined" color="inherit" size="large" sx={{my: 3, py: 1, px: 2}}>
          <SaveIcon />&ensp; Save
        </Button>
        <Button variant="outlined" color="inherit" size="large" sx={{my: 3, py: 1, px: 2}}>
          <ShareIcon />&ensp;  Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default ResultCard
