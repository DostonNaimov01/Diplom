import { Box, Typography } from "@mui/material";
import React from "react";

const Registration = () => {
  return (
    <Box width={'100%'} height={'100vh'} bgcolor={'#1E2538'}>
      <Box width={"80%"} ml={"10%"} mt={'5%'} bgcolor={'#1E2538'}>
        <Box> </Box>
        <Typography
          color={"white"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={"700"}
          fontSize={'40px'}
        >
          Подпишитесь на E-mail рассылку
        </Typography>
        <Box></Box>
        <Typography  color={"white"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          fontSize={'18px'}>
          Если хотиет быть в курсе последних новостей и новинок кино-{" "}
        </Typography>
        <Typography color={"white"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          fontSize={'18px'}>заполните форму ниже и оформите бесплатную E-mail рассылку!</Typography>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Registration;
