import { createTheme } from "@mui/material";
import { white } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: white, // Color de fondo personalizado
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            // Estilos del TextField
          },
          
        },
      },
    },
});

export default theme;