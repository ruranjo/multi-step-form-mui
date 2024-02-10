import { SxProps, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { alabaster,black, pastelBlue, white } from './styles/variables';
import { bgSidebarDesktop, bgSidebarMobile } from './utils/assets';
import { useState } from 'react';
import { StepPersonalInformation, StepSelectYourPlan, StepFinishingUp, StepPickAddOns} from './pages/Steps';
import { UserData } from './interfaces/userdata.inteface';

  
export interface styledMultiStepForm {
  containerStyle: SxProps;
  boxStyle: SxProps;
  sidebar: SxProps;
  sidebarBoxContainer: SxProps;
  sidebarBox: SxProps;
  steps: SxProps;
  iconNumberSidebar:SxProps;
  textMenu:SxProps;
}

const appStyle: styledMultiStepForm = {
  containerStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      width:'100%',
      height:'100vh',
      '@media screen and (max-width: 440px)': {
        height:'auto',
      },
    },
    boxStyle:{
      position:'relative',
      //border:'1px solid red',
      padding:'1rem',
      display: 'flex',
      justifyContent:'space-between',
      borderRadius:'10px',
      width:'70%',
      minWidth:'500px',
      height:'70%',
      backgroundColor: alabaster,
      '@media screen and (max-width: 440px)': {
        flexDirection:'column',
        height:'100%',
        width:'100%',
      },
    },
    sidebar:{
      //border:'1px solid purple',
      backgroundImage: `url(${bgSidebarDesktop})`, // Ruta de tu archivo SVG
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius:'10px',
      width:'30%',
      '@media screen and (max-width: 440px)': {
        backgroundImage: `url(${bgSidebarMobile})`,
        width:'100%',
        height:'200px'
      },
    },
    sidebarBoxContainer:{
      //border:'1px solid yellow',
      display:'flex',
      gap:'2rem',
      flexDirection:'column',
      
      marginTop:'2rem',
      marginLeft:'2rem',
      color:white,
      '@media screen and (max-width: 440px)': {
        marginTop:'0',
        marginLeft:'0',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'1rem',
      },
    },

    sidebarBox:{
      //border:'1px solid red',
      display:'flex',
      gap:'1rem',
      alignItems:'center',
      
      color:white,
      '@media screen and (max-width: 440px)': {
        flexDirection:'row',
        height:'auto',
      },
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
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //border:'1px solid tomato',
      width:'70%',
      '@media screen and (max-width: 440px)': {
        height:'100%',  
        width:'90%',
      },
    },
    textMenu:{
      '@media screen and (max-width: 440px)': {
        display:'none',
      },
    }
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
 

  const initialStatUserData:UserData = {
    name:"",
    email:"",
    phone:"",
    quoteTime:'monthly',//montly or yearly
    plan:'Arcade',//arcane, advenced, pro
    hasOnlineService : false,
    hasLargerStorage : false,
    hasCustomizableProfile : false,
  }

const App:React.FC<{}> = () => {
  const [currentStep, setCurrentStep]  = useState(progressSteps[0].stepNumber);
  
  const [userData, setUserData]  = useState<UserData>(initialStatUserData); 

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
                    <Box  sx={appStyle.textMenu} color={'inherit'}>
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
              currentStep === progressSteps[0].stepNumber && <StepPersonalInformation setCurrentStep={setCurrentStep}  userData={userData} setUserData={setUserData}/>
            }
            {
              currentStep === progressSteps[1].stepNumber && <StepSelectYourPlan setCurrentStep={setCurrentStep}  userData={userData} setUserData={setUserData}/>
            }
            {
              currentStep === progressSteps[2].stepNumber && <StepPickAddOns setCurrentStep={setCurrentStep}  userData={userData} setUserData={setUserData} />
            }
            {
              currentStep === progressSteps[3].stepNumber && <StepFinishingUp setCurrentStep={setCurrentStep} userData={userData}/>
            }
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
