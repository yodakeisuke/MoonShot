import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FocusOnTheTarget from './step1FocusOnTheTarget';
import DigInto from './step2DigInto';
import Planning from './step3Planning-page';
import Results from './step4Results';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Fab from '@mui/material/Fab';

const steps = ['問題の抽出', '原因の深堀り', '対策の立案'];

const stepsComponents = [
  <FocusOnTheTarget key={'firstStep'} />,
  <DigInto key={'secondStep'} />,
  <Planning key={'thirdStep'} />,
  <Results key={'fourthStep'} />,
];

export const StepperOverall: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (activeStep :number) => {
    return stepsComponents[activeStep]
    };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps} color="text">
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
        {!(activeStep === steps.length) ? (
          <React.Fragment>
            <Box>{getStepContent(activeStep)}</Box>
            <Box sx={{ display: 'flex', pt: 2, justifyContent: 'space-between'}}>
              <Fab
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                <ArrowLeftIcon fontSize="large"/>
              </Fab>
              <Fab
                color="secondary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ?
                  ( <DoneAllIcon /> ) : (<ArrowRightIcon fontSize="large"/> )
                }
              </Fab>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography align="left" sx={{ mt: 2, mb: 1 }}>
              All steps completed !
            </Typography>
            <Box>{getStepContent(activeStep)}</Box>
            <Fab
              color="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              <ArrowLeftIcon fontSize="large"/>
            </Fab>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}

export default StepperOverall