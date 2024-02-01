import { Box, Button, SxProps, TextField, Typography } from '@mui/material'
import React from 'react'
import { fontFamily, marineBlue } from '../../../styles/variables';

export interface Props {

}

export interface styledStepPersonalInformation {
  mainBoxStyle: SxProps;
  headerTitle: SxProps;
  title: SxProps;
  subTitle: SxProps;
  label: SxProps;
  textInput: SxProps;
  bottonContainer: SxProps;
  InputProps:SxProps;

}

const stepPersonalInformationStyle: styledStepPersonalInformation = {
  mainBoxStyle:{
      border:'1px solid blue',
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
      border:'1px solid red',
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
      textAlign: 'center'
    }
  }

const StepPersonalInfomation:React.FC<Props> = () => {
  return (
    <Box
      component="form" 
      sx={stepPersonalInformationStyle.mainBoxStyle} noValidate autoComplete="off"
    >
      <Box sx={stepPersonalInformationStyle.headerTitle}>
        <Typography sx={stepPersonalInformationStyle.title}  variant='h4'>Personal info</Typography>
        <Typography sx={stepPersonalInformationStyle.subTitle} variant='body2' color={'inherit'}>Please provide your name, email address, and phone number</Typography>
      </Box>
      <Box sx={stepPersonalInformationStyle.bottonContainer} color={'inherit'}>
        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Name</Typography>
        <TextField sx={stepPersonalInformationStyle.textInput} InputProps={{sx: stepPersonalInformationStyle.InputProps}}  id="outlined-basic" label="e.g Stephen King" variant="outlined" />

        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Email Address</Typography>
        <TextField  sx={stepPersonalInformationStyle.textInput} InputProps={{sx: stepPersonalInformationStyle.InputProps}} id="filled-basic" label="e.g stephemking@lorem.com" variant="outlined" />

        <Typography sx={stepPersonalInformationStyle.label} variant='body2'>Phone Number</Typography>
        <TextField sx={stepPersonalInformationStyle.textInput} InputProps={{sx: stepPersonalInformationStyle.InputProps}}  id="standard-basic" label="e.g +1 234 567 789" variant="outlined" />  
      </Box>
      <Box>
        <Button variant='contained'>Next Step</Button>
      </Box>
    </Box>
  )
}

export default StepPersonalInfomation