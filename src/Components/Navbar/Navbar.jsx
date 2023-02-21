import React, { Component } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <Box
        width={"1400px"}
        display={"flex"}
        justifyContent="center"
        flex={"column"}
        color={'none'}
      >
        <Box
          width={"100%"}
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          
        >
          <li>
            <Link to={'/home'}>
              <img src="https://o.remove.bg/uploads/e09b7ab4-6378-4e13-8e50-ac966cfd574a/cinema_1.png" alt="" />              
            </Link>
          </li>
          <li>
            <Link to={"/afisha"} style={{ color: "white" }}>
              Афиша
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/media"}>
              Медиа
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/films"}>
              Фильмы
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/aktyor"}>
              Актёры
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/news"}>
              Новости
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/podarki"}>
              Подборки
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/kategori"}>
              Категории
            </Link>
          </li>
        </Box>
      </Box>
    );
  }
}
