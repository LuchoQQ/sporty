import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/index";
import "./index.css";
import "@fontsource/poppins/900.css";
import "@fontsource/arimo/700.css";

const theme = extendTheme({
  fonts: {
    primary: "Arimo",
    secondary: "Poppins",
  },
  colors: {
    primary: "#802020",
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
