import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FocusOnTheTarget from './step1FocusOnTheTarget';
import DigInto from './step2DigInto';
import Planning from './step3Planning-page';
import Results from './step4Results';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const steps = ['問題の抽出', '原因の深堀り', '対策の立案'];
const stepsComponents = [
  <FocusOnTheTarget key={'firstStep'} />,
  <DigInto key={'secondStep'} />,
  <Planning key={'thirdStep'} />,
  <Results key={'fourthStep'} />,
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
            <Step key={label} {...stepProps} color="secondary">
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{mx: 'auto', width: '85%',  mt: 3}}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography align="left" sx={{ mt: 2, mb: 1 }}>
              All steps completed - シェアする
            </Typography>
            <Typography sx={{ px: 0 }} align="left" >{getStepContent(activeStep)}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '0 0 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography>{getStepContent(activeStep)}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between'}}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ flex: '0 0 auto' }}
              >
                <ArrowLeftIcon /> Back
              </Button>
              <Button onClick={handleNext} color="inherit" sx={{flex: '0 0 auto'}}>
                {activeStep === steps.length - 1 ? (
                  'Finish'
                ) : (
                  <Box sx={{display: 'inline-flex'}}>Next <ArrowRightIcon /></Box>
                )}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
