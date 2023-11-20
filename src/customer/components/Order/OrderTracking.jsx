import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = ["Placed", "Order Confirmed", "Shipped", "Out for Delivery", "Delivered"]

const OrderTracking = (activeStep) => {
  return (
    <div className='w-full'>
        <Stepper activeStep = {activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                <StepLabel sx={{color:"#9155fd", fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}

        </Stepper>

    </div>
  )
}

export default OrderTracking