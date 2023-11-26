import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummery from './OrderSummery';
import { useEffect } from 'react';

const steps = ['Login', 'Add Delivery Address', 'Order Summery', 'Payment'];

export default function Checkout() {

  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const step = querySearch.get("step");


  const handleNext = () => {
    let newSkipped = skipped;
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${step-1}`)
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='px-10 lg:px-20'>
 <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          const circleStyle = {
            color: index < step ? '#4caf50' : '#e0e0e0', 
            
          };

          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconProps={{ style: circleStyle }}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
         
         

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack} 
              sx={{ mr: 1 }}
            >
              Back
            </Button>
           
            
          </Box>
          <div className="mt-10">
            {step==2 ? <DeliveryAddressForm handleNext={handleNext} /> : <OrderSummery />}
          </div>
        </React.Fragment>

      )}
    </Box>
    </div>

   
  );
}