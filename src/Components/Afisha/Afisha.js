import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckboxesTags from "./Checkbox/Checkbox";
import Registration from "../Regestration/Registration";

const Afisha = () => {
  return (
    <Box bgcolor={"#1E2538"} width={"80%"} ml={"10%"} >
      <Box display={"flex"}>
        <Box width={'75%'} mt={'5%'}>
          <Typography
            color={"white"}
            alignItems={"start"}
            display={"flex"}
            flexDirection={"column"}
            fontSize={"40px"}
            fontWeight={"700"}

          >
            График премьер фильмов
          </Typography>
          <Box display={"flex"} mt={'1%'}>
            <Link to={"/home"} style={{ color: "#4F5B7C", display: "flex" }}>
              Главная <NavigateNextIcon />{" "}
            </Link>
            <Typography color={"white"}>Афиша</Typography>
          </Box >
          <Typography mt={'1%'} color={'white '}>
            Также как дальнейшее развитие различных форм деятельности, в своём
            классическом представлении, допускает внедрение первоочередных
            требований. Современные технологии достигли такого уровня, что
            внедрение современных методик предполагает независимые способы
            реализации стандартных подходов. Сторонники тоталитаризма в науке
            могут быть объявлены нарушающими общечеловеческие нормы этики и
            морали.
          </Typography>
        </Box>
        <Box width={'25%'}>
          nkbcb
        </Box>
      </Box>
      <Registration/>

    </Box>
  );
};

export default Afisha;
