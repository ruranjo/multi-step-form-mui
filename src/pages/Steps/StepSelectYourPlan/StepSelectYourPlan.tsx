import { Box, Button, Switch, SxProps, Typography } from '@mui/material'
import React, { useState } from 'react'
import { fontFamily, lightGray, magnolia, marineBlue, purplishBlue, white} from '../../../styles/variables';
import { iconAdvanced, iconArcade, iconPro } from '../../../utils/assets';
import { UserData } from '../../../interfaces/userdata.inteface';
import { quoteTimeData } from '../../../utils/quoteTimeData';


export interface styledStepSelectYourPlan {
  mainBoxStyle: SxProps;
  headerTitle: SxProps;
  title: SxProps;
  subTitle: SxProps;
  buttonConteiner:SxProps;
  buttonNext: SxProps;
  buttonBack: SxProps;
  cardPlansContainer:SxProps;
  cardPlan:SxProps;
  switchBox :SxProps;
}

const StepSelectYourPlanStyle: styledStepSelectYourPlan = {
  mainBoxStyle:{
      
      display:'flex',
      flexDirection:'column',
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
      width:'80%',
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
    cardPlansContainer:{
      marginTop:'2rem',
      display:'flex',
      width:'80%',
      height:'50%',
      justifyContent:'space-between',
    },
    cardPlan:{
      paddingTop:'1rem',
      paddingBottom:'1rem',
      paddingLeft:'1rem',
      border:'1px solid '+ lightGray,
      borderRadius:'20px',
      justifyContent:'space-between',
      display:'flex',
      flexDirection:'column',
      width:'28%',
      minWidth:'120px',
      height: '100%',
      cursor:'pointer'
    },
    switchBox:{
      width:'80%',
      background: magnolia,
      display:'flex',
      justifyContent:'center',
      marginTop:'1rem'
    }
  }

  
export interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  userData: UserData;
}

const StepSelectYourPlan:React.FC<Props> = ({setCurrentStep, userData, setUserData}) => {
  const [checked, setChecked] = useState(!(userData.quoteTime === 'monthly'));
  
  let planCards = [
    {
      img: iconArcade,
      title:'Arcade',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.arcade : quoteTimeData.yearly.arcade,
    },
    {
      img: iconAdvanced,
      title:'Advanced',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.advance : quoteTimeData.yearly.advance,
    },
    {
      img: iconPro,
      title:'Pro',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.pro : quoteTimeData.yearly.pro,
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setUserData({...userData, quoteTime: checked ? 'monthly' : 'yearly' });
    planCards = [
      {
        img: iconArcade,
        title:'Arcade',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.arcade : quoteTimeData.yearly.arcade,
      },
      {
        img: iconAdvanced,
        title:'Advanced',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.advance : quoteTimeData.yearly.advance,
      },
      {
        img: iconPro,
        title:'Pro',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.pro : quoteTimeData.yearly.pro,
      }
    ]
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(3);
    // Lógica para manejar la presentación del formulario
  };

  const toGoBack = () => {
    setCurrentStep(1);
    // Lógica para manejar la presentación del formulario
  };

  

  const handleClick = (cardTitle:string) => {
    setUserData({...userData, plan:cardTitle});
    // Puedes realizar otras acciones aquí...
  };

 



  return (
    
    <Box
      sx={StepSelectYourPlanStyle.mainBoxStyle} 
    >
      <form action="" onSubmit={handleSubmit}>
      <Box sx={StepSelectYourPlanStyle.headerTitle}>
        <Typography sx={StepSelectYourPlanStyle.title}  variant='h4'>
          Select your plan
        </Typography>

        <Typography sx={StepSelectYourPlanStyle.subTitle} variant='body2' color={'inherit'}>
          You have the option of monthly or yearly billing
        </Typography>
      </Box>
      
      <Box sx={StepSelectYourPlanStyle.cardPlansContainer} color={'inherit'}>
        {
          planCards.map((card,index)=>{
            
            return (
            <Box onClick={()=> handleClick(card.title)} sx={userData.plan === card.title ? {...StepSelectYourPlanStyle.cardPlan, border:'1px solid '+purplishBlue}: StepSelectYourPlanStyle.cardPlan} key={index} >
              <Box>
                <img src={card.img} alt={card.title} />
              </Box>
              <Box>
                <Typography sx={{...StepSelectYourPlanStyle.title, fontSize:'20px'}}  variant='h4'>
                  {card.title}
                </Typography>
                <Typography sx={StepSelectYourPlanStyle.subTitle} variant='body2' color={'inherit'}>
                  ${card.quotePerTime}/{userData.quoteTime === 'monthly' ? 'mo': 'year'}
                </Typography>
                <Typography sx={{...StepSelectYourPlanStyle.title, color: marineBlue, fontSize:'12px'}} variant='body2' color={'inherit'}>
                  {userData.quoteTime === 'yearly' ? '2 months free' : ''}
                </Typography>
              </Box>
            </Box>
            )})
          
        }
      </Box>

      <Box sx={StepSelectYourPlanStyle.switchBox}>
        <Typography sx={{...StepSelectYourPlanStyle.title, fontSize:'16px', width:'auto'}}  variant='subtitle1'>
          Monthly
        </Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            '& .MuiSwitch-thumb': {
              color: white,
              backgroundColor: marineBlue,
            },
            '& .MuiSwitch-track': {
              backgroundColor: marineBlue,
            },
          }}
        />
        <Typography sx={{...StepSelectYourPlanStyle.title, fontSize:'16px', width:'auto'}}  variant='subtitle1'>
          Yearly
        </Typography>
      </Box>

      <Box sx={StepSelectYourPlanStyle.buttonConteiner}>
        <Button sx={StepSelectYourPlanStyle.buttonBack} onClick={()=> toGoBack()} variant='text'>Go Back</Button>
        <Button sx={StepSelectYourPlanStyle.buttonNext} type="submit" variant='contained'>Next Step</Button>
      </Box>
      </form>
    </Box>
  )
}

export default StepSelectYourPlan;

