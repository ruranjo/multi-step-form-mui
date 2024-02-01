import { Box, Button, SxProps, TextField, Typography } from '@mui/material'
import React from 'react'
import { fontFamily, marineBlue, purplishBlue } from '../../../styles/variables';


export interface styledStepPersonalInformation {
  mainBoxStyle: SxProps;
  headerTitle: SxProps;
  title: SxProps;
  subTitle: SxProps;
  label: SxProps;
  textInput: SxProps;
  bottonContainer: SxProps;
  InputProps:SxProps;
  buttonConteiner:SxProps;
  button:SxProps;
}

const stepPersonalInformationStyle: styledStepPersonalInformation = {
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
    bottonContainer:{
      display:'flex',
      flexDirection:'column',
      gap:'0.5rem',
    },
    label:{
      width:'80%',
      color: marineBlue,
      '@media screen and (max-width: 870px)': {
      },
    },
    textInput:{
      width:'80%',
      '@media screen and (max-width: 870px)': {
      },
    },
    InputProps:{
      display:'flex',
      height:'40px',
      textAlign: 'center', 
      
      '&:focus-within': {
        '& fieldset': {
          borderColor: purplishBlue+' !important' , // Cambiar el color del borde al púrpura cuando está enfocado
       
        },
        '& label': {
          color: purplishBlue, // Color de la etiqueta (label)
        },
      },
      
       
    },
    buttonConteiner:{
      
      display:'flex',
      justifyContent:'flex-end',
      width:'80%',
      marginTop:'1rem'
      
    },
    button:{
        marginTop:'3rem',
        backgroundColor: marineBlue + ' !important',
        textTransform: 'none',
        fontWeight:600,
        fontFamily:fontFamily,
    }
  }

  
export interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const StepSelectYourPlan:React.FC<Props> = ({setCurrentStep}) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(2);
    // Lógica para manejar la presentación del formulario
  };

  return (
    
    <Box
      sx={stepPersonalInformationStyle.mainBoxStyle} 
    >
      <form action="" onSubmit={handleSubmit}>
      <Box sx={stepPersonalInformationStyle.headerTitle}>
        <Typography sx={stepPersonalInformationStyle.title}  variant='h4'>Personal info</Typography>
        <Typography sx={stepPersonalInformationStyle.subTitle} variant='body2' color={'inherit'}>Please provide your name, email address, and phone number</Typography>
      </Box>
      <Box sx={stepPersonalInformationStyle.bottonContainer} color={'inherit'}>
        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Name</Typography>
        <TextField 
          sx={stepPersonalInformationStyle.textInput}
          InputLabelProps={{ shrink: false }}
          InputProps={{ sx: stepPersonalInformationStyle.InputProps}}
          id="name-user"
          placeholder="e.g Stephen King"
          variant="outlined"
          required 
        />

        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Email Address</Typography>
        <TextField  
          sx={stepPersonalInformationStyle.textInput}
          InputLabelProps={{ shrink: false }}
          InputProps={{sx: stepPersonalInformationStyle.InputProps}}
          id="email-address-user"
          placeholder="e.g stephemking@lorem.com"
          variant="outlined"
          type="email"
          required 
        />

        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Phone Number</Typography>
        <TextField 
          sx={stepPersonalInformationStyle.textInput}
          InputLabelProps={{ shrink: false }} 
          InputProps={{sx: stepPersonalInformationStyle.InputProps}} 
          id="phone-number-user"
          placeholder="e.g +1 234 567 789" 
          variant="outlined"
          type='tel'
          required
        />  
      </Box>
      <Box sx={stepPersonalInformationStyle.buttonConteiner}>
        <Button sx={stepPersonalInformationStyle.button} type="submit" variant='contained'>Next Step</Button>
      </Box>
      </form>
    </Box>
  )
}

export default StepSelectYourPlan;

