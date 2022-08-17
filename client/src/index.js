import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import "@fontsource/poppins/900.css";
import "@fontsource/arimo/600.css"

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
