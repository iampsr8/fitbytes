import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/fitbytes2.png'


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px"> 
        <img src={Logo} alt="logo" style={{ width: '200px', height: '35px' }} />
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { lg: '25px', xs: '18px' } }} mt="10px" textAlign="center" pb="40px">
          Made with 💪 by Prateek Rath
        </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer