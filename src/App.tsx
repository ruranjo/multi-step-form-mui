import { SxProps, Typography } from '@mui/material';
import './App.css'
import { Box, Container } from '@mui/system';
import { alabaster,black, pastelBlue, white } from './styles/variables';
import { bgSidebarDesktop } from './utils/assets';
import { useState } from 'react';
import { StepPersonalInformation, StepSelectYourPlan, StepFinishingUp, StepPickAddOns} from './pages/Steps';

  
export interface styledMultiStepForm {
  containerStyle: SxProps;
  boxStyle: SxProps;
  sidebar: SxProps;
  sidebarBoxContainer: SxProps;
  sidebarBox: SxProps;
  steps: SxProps;
  iconNumberSidebar:SxProps;
}

const appStyle: styledMultiStepForm = {
  containerStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      width:'100%',
      height:'100vh',
      '@media screen and (max-width: 870px)': {
        
      },
    },
    boxStyle:{
      padding:'1rem',
      display: 'flex',
      justifyContent:'space-between',
      width:'70%',
      minWidth:'500px',
      height:'70%',
      border:'1px solid red',
      backgroundColor: alabaster,
      '@media screen and (max-width: 440px)': {
        flexDirection:'column'
      },
    },
    sidebar:{
      backgroundImage: `url(${bgSidebarDesktop})`, // Ruta de tu archivo SVG
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border:'1px solid purple',
      width:'30%',
      
    },
    sidebarBoxContainer:{
      
      display:'flex',
      gap:'2rem',
      flexDirection:'column',
      marginTop:'2rem',
      marginLeft:'2rem',
      color:white,
    },

    sidebarBox:{
      
      display:'flex',
      gap:'1rem',
      alignItems:'center',
      color:white,
    },
    iconNumberSidebar:{
      border:'1px solid white',
      borderRadius:'50%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'30px',
      height:'30px',
      color:white,
    },
    steps:{
      border:'1px solid tomato',
      
      width:'70%',
    },
  }

  const progressSteps = [
    {
      stepNumber:1,
      title:'YOUR INFO',
    },
    {
      stepNumber:2,
      title:'SELECT PLAN',
    },
    {
      stepNumber:3,
      title:'ADD-ONS',
    },
    {
      stepNumber:4,
      title:'SUMMARY',
    },
  ]

const App:React.FC<{}> = () => {
  const [currentStep, setCurrentStep]  = useState(progressSteps[0].stepNumber)
  return (
    <>
      <Container maxWidth={false}  sx={appStyle.containerStyle}>
        <Box sx={appStyle.boxStyle}>
          <Box sx={appStyle.sidebar}>
            <Box sx={appStyle.sidebarBoxContainer}>
            {
              progressSteps.map((step,index)=>{
                return (
                  <Box sx={appStyle.sidebarBox} key={index}>
                    <Box sx={ currentStep === step.stepNumber ? {...appStyle.iconNumberSidebar, color: black, backgroundColor: pastelBlue} : appStyle.iconNumberSidebar}>
                      <Typography variant='body2' fontWeight={'600'} color={'inherit'}>{step.stepNumber}</Typography>
                    </Box>
                    <Box color={'inherit'}>
                      <Typography  sx={{opacity:0.5}} variant='body2' fontWeight={'100'} color={'inherit'} >STEP {step.stepNumber}</Typography>
                      <Typography variant='body2' fontWeight={'600'} color={'inherit'}>{step.title}</Typography>
                    </Box>
                  </Box>
                )}
                )
            }
            </Box>  
          </Box>
          <Box sx={appStyle.steps}>
            {
              currentStep === progressSteps[0].stepNumber && <StepPersonalInformation setCurrentStep={setCurrentStep} />
            }
            {
              currentStep === progressSteps[1].stepNumber && <StepSelectYourPlan setCurrentStep={setCurrentStep} />
            }
            {
              currentStep === progressSteps[2].stepNumber && <StepPickAddOns setCurrentStep={setCurrentStep} />
            }
            {
              currentStep === progressSteps[3].stepNumber && <StepFinishingUp setCurrentStep={setCurrentStep} />
            }
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
