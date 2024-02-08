import { Box, Button, SxProps, Typography } from '@mui/material'
import React from 'react'
import { coolGray, fontFamily, marineBlue, purplishBlue } from '../../../styles/variables';
import { UserData } from '../../../interfaces/userdata.inteface';
import { quoteTimeData } from '../../../utils/quoteTimeData';


export interface styledStepStepFinishingUp {
  mainBoxStyle: SxProps;
  headerTitle: SxProps;
  title: SxProps;
  subTitle: SxProps;
  buttonConteiner:SxProps;
  buttonNext: SxProps;
  buttonBack: SxProps;
  resumenContainer: SxProps;
  checkTextContent: SxProps;
  principalCostBox: SxProps;
  textMainCostBox: SxProps;
  resumenHeader: SxProps;
  total: SxProps;
}

const StepFinishingUpStyle: styledStepStepFinishingUp = {
  mainBoxStyle:{
      
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      paddingTop:'1.5rem',
      paddingLeft:'4rem',
      alignContent:'center',
      gap:'2rem',
      width:'100%',
      height:'100%',
      '@media screen and (max-width: 870px)': {
        
      },
    },
    headerTitle:{
      
      display:'flex',
      flexDirection:'column',
      
      '@media screen and (max-width: 870px)': {
        
      },
    },
    title:{
      width:'80%',
      color: marineBlue,
      fontWeight:700,
      fontFamily:fontFamily,
      '@media screen and (max-width: 870px)': {
      },
    },
    subTitle:{
      opacity:0.5,
      fontWeight:400,
      fontFamily:fontFamily,
      '@media screen and (max-width: 870px)': {
      },
    },
    buttonConteiner:{
      
      display:'flex',
      justifyContent:'space-between',
      width:'80%',
      marginTop:'1rem'
      
    },
    buttonNext:{
        marginTop:'3rem',
        backgroundColor: marineBlue + ' !important',
        textTransform: 'none',
        fontWeight:600,
        fontFamily:fontFamily,
    },
    buttonBack:{
      marginTop:'3rem',
      textTransform: 'none',
      fontWeight:600,
      color: 'gray !important',
      fontFamily:fontFamily,
    },
    resumenContainer:{
      width:'80%',
      marginTop:'2rem',
      justifyContent:'space-between',
      borderBottom:'1px solid gray',
    },
    checkTextContent:{
      display:'flex',
      
      
      justifyContent:'space-between',
      alignItems:'center'
    },
    principalCostBox:{
      width:'80%',
      display:'flex',
      justifyContent:'space-between',
      
    },
    textMainCostBox:{
      
      width:'80%',
    },
    resumenHeader:{
      
      paddingBottom:'1rem',
      borderBottom:'1px solid gray',
      display:'flex',
    },
    total:{
      paddingTop:'2rem',
      display:'flex',
      width:'80%',
      justifyContent:'space-between',
      alignItems:'center'
    },
  }

  
  export interface Props {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    userData: UserData;
  }

  const getMainCost = (userData: UserData) => {
    
      if (userData.quoteTime === 'monthly') {
        if (userData.plan === 'Arcade') {
          return  quoteTimeData.montly.arcade;
        } else if (userData.plan === 'Advanced') { 
          return  quoteTimeData.montly.advance ;
        } else if (userData.plan === 'Pro') {
          return  quoteTimeData.montly.pro;
        } else {
          // Manejo por defecto o error si quoteType no es 'arcade', 'advanced', ni 'pro'
          return -1;
        }
      } else if (userData.quoteTime === 'yearly') {
        if (userData.plan === 'Arcade') {
          return  quoteTimeData.yearly.arcade;
        } else if (userData.plan === 'Advanced') {
          return quoteTimeData.yearly.advance;
        } else if (userData.plan === 'Pro') {
          return quoteTimeData.yearly.pro;
        } else {
          // Manejo por defecto o error si quoteType no es 'arcade', 'advanced', ni 'pro'
          return -1;
        }
      } else {
        // Manejo por defecto o error si quoteTime no es 'monthly' ni 'yearly'
        return -1;
      }
  }


const StepFinishingUp:React.FC<Props> = ({setCurrentStep,  userData}) => {
  
   
   
   
  let resumen = [
    {
      title:'Online service',
      option: userData.hasOnlineService,
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.onlineService : quoteTimeData.yearly.onlineService,
    },
    {
      title:'Larger storage',
      option: userData.hasLargerStorage,
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.largerSatorage : quoteTimeData.yearly.largerSatorage,
    },
    {
      title:'Curstomizable Profile',
      option: userData.hasCustomizableProfile,
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.customizable : quoteTimeData.yearly.customizable,
    },
  ]

  const getTotal = () => {
    // Asumiendo que resumen es tu array de objetos
    const totalQuotePerTime = resumen.reduce((accumulator, res) => {
        if (res.option) {
          return accumulator + res.quotePerTime;
        }
        return accumulator;
      }, 0);

      return (totalQuotePerTime + getMainCost(userData))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para manejar la presentación del formulario
  };

  const toGoBack = () => {
    setCurrentStep(3);
    // Lógica para manejar la presentación del formulario
  };

  return (
    
    <Box
      sx={StepFinishingUpStyle.mainBoxStyle} 
    >
      <form action="" onSubmit={handleSubmit}>
        <Box sx={StepFinishingUpStyle.headerTitle}>
          <Typography sx={StepFinishingUpStyle.title}  variant='h4'>
            Finishing up
          </Typography>

          <Typography sx={StepFinishingUpStyle.subTitle} variant='body2' color={'inherit'}>
            Double-check everything looks OK before confirming
          </Typography>
        </Box>

        <Box sx={StepFinishingUpStyle.resumenContainer} color={'inherit'}>
          
          <Box sx={StepFinishingUpStyle.resumenHeader}>
              
              <Box sx={StepFinishingUpStyle.principalCostBox}>
                
                <Box sx={StepFinishingUpStyle.textMainCostBox}>
                  <Typography sx={{...StepFinishingUpStyle.title, fontSize:'20px'}}  variant='h4'>
                    {userData.plan} {"("+userData.quoteTime+")"}
                  </Typography>
                  <Typography sx={StepFinishingUpStyle.subTitle} variant='body2' color={'inherit'}>
                    Change
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{...StepFinishingUpStyle.title, fontSize:'20px'}} variant='body2' color={'inherit'}>
                    +${getMainCost(userData)}/{userData.quoteTime === 'monthly' ? 'mo': 'yr'}
                  </Typography>
                </Box>
              </Box>
          </Box>

          { 
            resumen.map((res,index) =>{
              return (
                res.option && (
                  
                  <Box sx={StepFinishingUpStyle.checkTextContent} key={index}>
                    
                    <Typography sx={StepFinishingUpStyle.subTitle} variant='body2' color={'inherit'}>
                        {res.title}
                    </Typography>
                    
                    <Typography sx={StepFinishingUpStyle.subTitle} variant='body2' color={'inherit'}>
                      +${res.quotePerTime}/{userData.quoteTime === 'monthly' ? 'mo': 'yr'}
                    </Typography>
                </Box>

              )
              )
            })      
          }
        </Box>
        <Box sx={StepFinishingUpStyle.total}>
                    
            <Typography sx={StepFinishingUpStyle.subTitle} variant='body2' color={'inherit'}>
                Total {'(per '+userData.quoteTime+')'}
            </Typography>
            
            <Typography sx={{...StepFinishingUpStyle.subTitle, fontSize:'20px', fontWeight:600}} variant='body2' color={purplishBlue}>
              +${getTotal()}/{userData.quoteTime === 'monthly' ? 'mo': 'yr'}
            </Typography>
        </Box>
        
        <Box sx={StepFinishingUpStyle.buttonConteiner}>
          <Button sx={StepFinishingUpStyle.buttonBack} onClick={()=> toGoBack()} variant='text'>Go Back</Button>
          <Button sx={StepFinishingUpStyle.buttonNext} type="submit" variant='contained'>Confirm</Button>
        </Box>
      </form>
      
    </Box>
  )
}

export default StepFinishingUp

