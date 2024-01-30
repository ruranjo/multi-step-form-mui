import { SxProps, Typography } from '@mui/material';
import './App.css'
import { Box, Container } from '@mui/system';
import { alabaster, coolGray, magnolia, marineBlue, purplishBlue, white } from './styles/variables';
import { bgSidebarDesktop } from './utils/assets';

  
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
      minWidth:'600px',
      height:'70%',
      border:'1px solid red',
      backgroundColor: coolGray,
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
                    <Box sx={appStyle.iconNumberSidebar}>
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

          </Box>
        </Box>
      </Container>
    </>
  )
}

export default App
