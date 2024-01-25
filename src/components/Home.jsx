import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Button, Alert, AlertTitle, Typography, Stepper, Step, StepContent, StepLabel } from '@mui/material';

import ChromeIcon from '../icons/Chrome'
import EdgeIcon from '../icons/Edge'
import OperaIcon from '../icons/Opera'
import SettingsIcon from '@mui/icons-material/Settings'


const steps = ['Connection', 'Selection', 'Flashing', 'Done'];



const Home = (props) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            <Grid item xs={3}>

                {props.supported() ?
                    <Box align='center'>
                        <Typography component="h1" variant="h4" align="center">
                            Configure your firmware
                        </Typography>

                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}} orientation="vertical">
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        {activeStep === 0}
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>

                        <Box>
                            <Button variant='contained' color='success' size='large' onClick={props.connect} sx={{ m: 1 }}>
                                Connect
                            </Button>
                        </Box>

                        <Box>
                            <Button size='large' onClick={props.openSettings} sx={{ m: 1, color:'#bebebe' }}>
                                <SettingsIcon />
                            </Button>
                        </Box>

                        <Alert severity='info' align='left'>
                            1. Click on Connect<br />
                            2. Plug in your ESP & select the port<br />
                            3. Add your .bin & set the address<br />
                            4. Click Program to flash it 😊<br />
                        </Alert>
                    </Box>

                    :

                    <Alert severity='warning'>
                        <AlertTitle>Your browser doesn&apos;t support Web Serial 😭</AlertTitle>
                        Try using&nbsp;
                        <a href='https://www.google.com/chrome/' target='blank'>
                            <ChromeIcon fontSize='inherit' /> <b>Chrome</b>
                        </a>
                        ,&nbsp;
                        <a href='https://www.microsoft.com/en-us/edge' target='blank'>
                            <EdgeIcon fontSize='inherit' /> <b>Edge</b>
                        </a>
                        , or&nbsp;
                        <a href='https://www.opera.com/' target='blank'>
                            <OperaIcon fontSize='inherit' /> <b>Opera</b>
                        </a>
                        <br />
                        (IOS & Android browsers are not supported)
                        <br />
                        <br />
                        Learn more about&nbsp;
                        <a href='https://developer.mozilla.org/en-US/docs/Web/API/Serial#browser_compatibility' target='blank'>
                            browser compatibility
                        </a>
                    </Alert>
                }
            </Grid>

        </Grid>
    )
}

Home.propTypes = {
    connect: PropTypes.func,
    supported: PropTypes.func,
    openSettings: PropTypes.func,
}

export default Home