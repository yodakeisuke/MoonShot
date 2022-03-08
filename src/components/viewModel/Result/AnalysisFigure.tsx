import Box from '@mui/material/Box'
import React from 'react'
import { Card, CardContent, CardHeader, Paper } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { stateAsIs, stateToBe, stateGap } from '../Analysis/AnalysisState';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { yellow } from '@mui/material/colors';

export const AnalysisFigure: React.FC = () => {
  const asIs = useRecoilValue(stateAsIs);
  const toBe = useRecoilValue(stateToBe);
  const Gap = useRecoilValue(stateGap);

  return (
    //Todo: レスポンシブ
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"},
        justifyContent: "center", alignItems: "center", gap: 4}}>
        <Card elevation={1}
          sx={{bgcolor: "#F5F5F5", width: {xs: "60vw", md: "27vw"}, height: {xs: "100px", md: "160px"}}}>
          <CardHeader subheader="AsIs" sx={{p: 0.1, textAlign: "center"}}/>
          <CardContent sx={{p: 1}}>{asIs}</CardContent>
        </Card>
        <CompareArrowsIcon sx={{transform: {xs: "rotate(90deg)", md: "rotate(0deg)"}}}/>
        <Card elevation={1}
          sx={{bgcolor :"#F5F5F5", width: {xs: "60vw", md: "27vw"}, height: {xs: "100px", md: "160px"}}}>
          <CardHeader subheader="ToBe" sx={{p: 0.1, textAlign: "center"}}/>
          <CardContent sx={{p: 1}}>{toBe}</CardContent>
        </Card>
      </Box>
      <ArrowDownwardIcon sx={{mb: 2, justifySelf: "center", mt: {xs: 2, md: 0}}}/>
      <Card elevation={1}
        sx={{bgcolor :"#F5F5F5", width: "60vw", height: "100px", justifySelf: "center"}}>
        <CardHeader subheader="Gap" subheaderTypographyProps={{color: yellow[700]}}
          sx={{p: 0.1, textAlign: "center"}}
          />
        <CardContent sx={{p: 1}}>{Gap}</CardContent>
      </Card>
    </Box>
  )
}

export default AnalysisFigure
