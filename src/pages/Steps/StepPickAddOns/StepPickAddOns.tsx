import { Box, Button, Checkbox, SxProps,  Typography } from '@mui/material'
import React from 'react'
import { fontFamily, marineBlue, purplishBlue} from '../../../styles/variables';
import { UserData } from '../../../interfaces/userdata.inteface';
import { quoteTimeData } from '../../../utils/quoteTimeData';


export interface styledStepPickAddOns {
  mainBoxStyle: SxProps;
  headerTitle: SxProps;
  title: SxProps;
  subTitle: SxProps;
  buttonConteiner:SxProps;
  buttonNext: SxProps;
  buttonBack: SxProps;
  checkContainer:SxProps;
  checkBox:SxProps;
  checkTextContent:SxProps;
}

const StepPickAddOnsStyle: styledStepPickAddOns = {
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
    checkContainer:{
      marginTop:'2rem',
      justifyContent:'space-between',
    },
    checkBox:{
      paddingTop:'1rem',
      paddingBottom:'1rem',
      paddingLeft:'1rem',
      borderRadius:'20px',
      display:'flex',
      alignItems:'center',
      minWidth:'120px',
      height: '100%',
      cursor:'pointer'
    },
    checkTextContent:{
        display:'flex',
        width:'80%',
        
        justifyContent:'space-between',
        alignItems:'center'
    }
  }

  
export interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  userData: UserData;
}

const StepPickAddOns:React.FC<Props> = ({setCurrentStep, userData, setUserData}) => {
  
  let pickAddOns = [
    {
      checked: userData.hasOnlineService,
      title:'Online service',
      description:'Access to mutiplayer games',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.onlineService : quoteTimeData.yearly.onlineService,
    },
    {
      checked: userData.hasLargerStorage,
      title:'Larger storage',
      description:'Extra 1TB of cloud save',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.largerSatorage : quoteTimeData.yearly.largerSatorage,
    },
    {
      checked: userData.hasCustomizableProfile,
      title:'Curstomizable Profile',
      description:'Custom theme in your profile',
      quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.customizable : quoteTimeData.yearly.customizable,
    },
  ]
  
  const handleChange = (pick:string) => {
    if(pick === pickAddOns[0].title){//title:'Online service'
      setUserData({...userData, hasOnlineService : !userData.hasOnlineService});
    }
    if(pick === pickAddOns[1].title){//title:'Larger storage'
      setUserData({...userData, hasLargerStorage : !userData.hasLargerStorage});
    }
    if(pick === pickAddOns[2].title){//title:'Curstomizable Profile',
      setUserData({...userData, hasCustomizableProfile : !userData.hasCustomizableProfile});
    }

    pickAddOns = [
      {
        checked: userData.hasOnlineService,
        title:'Online service',
        description:'Access to mutiplayer games',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.onlineService : quoteTimeData.yearly.onlineService,
      },
      {
        checked: userData.hasLargerStorage,
        title:'Larger storage',
        description:'Extra 1TB of cloud save',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.largerSatorage : quoteTimeData.yearly.largerSatorage,
      },
      {
        checked: userData.hasCustomizableProfile,
        title:'Curstomizable Profile',
        description:'Custom theme in your profile',
        quotePerTime: userData.quoteTime === 'monthly' ? quoteTimeData.montly.customizable : quoteTimeData.yearly.customizable,
      },
    ]
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(4);
    // Lógica para manejar la presentación del formulario
  };

  const toGoBack = () => {
    setCurrentStep(2);
    // Lógica para manejar la presentación del formulario
  };

  

  const handleClick = (cardTitle:string) => {
    setUserData({...userData, plan:cardTitle});
    // Puedes realizar otras acciones aquí...
  };

  return (
    
    <Box
      sx={StepPickAddOnsStyle.mainBoxStyle} 
    >
      <form action="" onSubmit={handleSubmit}>
      <Box sx={StepPickAddOnsStyle.headerTitle}>
        <Typography sx={StepPickAddOnsStyle.title}  variant='h4'>
          Pick add-ons
        </Typography>

        <Typography sx={StepPickAddOnsStyle.subTitle} variant='body2' color={'inherit'}>
          Add-ons help enhance your gaming experience
        </Typography>
      </Box>
      
      <Box sx={StepPickAddOnsStyle.checkContainer} color={'inherit'}>
        {
          pickAddOns.map((pick,index)=>{
            
            return (
            <Box onClick={()=> handleClick(pick.title)} sx={userData.plan === pick.title ? {...StepPickAddOnsStyle.checkBox, border:'1px solid '+purplishBlue}: StepPickAddOnsStyle.checkBox} key={index} >
              <Box>
                <Checkbox
                  checked={pick.checked}
                  onChange={()=> handleChange(pick.title)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </Box>

              <Box sx={StepPickAddOnsStyle.checkTextContent}>
                <Box>
                <Typography sx={{...StepPickAddOnsStyle.title, fontSize:'20px'}}  variant='h4'>
                  {pick.title}
                </Typography>
                <Typography sx={StepPickAddOnsStyle.subTitle} variant='body2' color={'inherit'}>
                  {pick.description} 
                </Typography>
                </Box>
                <Typography sx={StepPickAddOnsStyle.subTitle} variant='body2' color={'inherit'}>
                  +${pick.quotePerTime}/{userData.quoteTime === 'monthly' ? 'mo': 'yr'}
                </Typography>
              </Box>
            </Box>
            )})
          
        }
      </Box>

      <Box sx={StepPickAddOnsStyle.buttonConteiner}>
        <Button sx={StepPickAddOnsStyle.buttonBack} onClick={()=> toGoBack()} variant='text'>Go Back</Button>
        <Button sx={StepPickAddOnsStyle.buttonNext} type="submit" variant='contained'>Next Step</Button>
      </Box>
      </form>
    </Box>
  )
}

export default StepPickAddOns


/*


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );

*/