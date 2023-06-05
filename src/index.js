import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const theme = extendBaseTheme({
  body: {
    margin: 0, 
    padding: 0
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  
);
