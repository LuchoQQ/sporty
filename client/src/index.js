import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins";
import "@fontsource/arimo"

const theme = extendTheme({ 
  fonts: {
    primary: 'Arimo',
    secondary: 'Poppins'
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
