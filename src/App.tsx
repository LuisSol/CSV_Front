import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// styles
import { nomalTheme } from "./styles/theme";

// components
import AppRouter from "./router/AppRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={nomalTheme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
