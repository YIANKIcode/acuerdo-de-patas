import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";
import { DataContext } from "../context/DataContext";
import AgregarFirmaPata from "./scripts/AgregarFirmaPata";

const Body = () => {
  const { setContenido } = useContext(DataContext);

  const alerta = () => {
    alert("hola");
    alert("chau");
  };

  return (
    <div>
      <Typography component="div">
        <Box sx={{ fontWeight: "light", fontSize: 18, m: 3, ml: 10 }}>
          Comience a escribir su acuerdo de patas en la siguiente caja de texto:
        </Box>
      </Typography>

      <Box sx={{ mx: 25, my: 5 }}>
        <FroalaEditor
          tag="textarea"
          onModelChange={(info) => {
            setContenido(info);
            console.log(info);
          }}
          config={{
            placeholderText: "Escriba su acuerdo de patas aquí",
          }}
        />
      </Box>
      {/* <button onClick={alerta}> Agregar usuario </button> */}
      <AgregarFirmaPata />
    </div>
  );
};

export default Body;
