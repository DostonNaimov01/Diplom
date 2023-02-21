import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Afisha from "./Components/Afisha/Afisha";
import Media from "./Components/Media/Media";
import Navbar from "./Components/Navbar/Navbar";
import Podorki from "./Components/Podorki/Podorki";
import Kategori from "./Components/Kategori/Kategori";
import Films from "./Components/Films/Films";
import Aktyor from "./Components/Aktyor/Aktyor";
import News from "./Components/News/News";
import Home from "./Components/Home/Home";
import Registration from "./Components/Regestration/Registration";
const App = () => {
  return (
    <Box bgcolor={'#1E2538'}>
      <Box width={"100%"} bgcolor='#1E2538
      '>
          <Box
            sx={[
              { position: "sticky", top: "0px", backdropFilter: "blur(20px)" },
            ]}
            p="10px 0"
            width={"100%"}
            display={"flex"}
            justifyContent="center"
            flex={"column"}
          >
            <Navbar />
        </Box>
        
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/media" element={<Media />} />
          <Route path="/films" element={<Films />} />
          <Route path="/aktyor" element={<Aktyor />} />
          <Route path="/news" element={<News />} />
          <Route path="/podorki" element={<Podorki />} />
          <Route path="/kategori" element={<Kategori />} />
        </Routes>
        
      </Box>
      
          
            
          
           
        
        
       
      </Box>
    
  );
};

export default App;

// export default function Salom(){
//     return (
//       <div>App</div>
//     )
// }
